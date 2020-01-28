import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private mod = process.env.NODE_ENV;
  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k + this.mod, true));
    return this;
  }

  public getPort() {
    return this.getValue('SERVER_PORT', true);
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: 'localhost' || this.getValue('DB_HOST_' + this.mod),
      port: parseInt(this.getValue('DB_PORT_' + this.mod), 0),
      username: this.getValue('DB_USERNAME_' + this.mod),
      password: this.getValue('DB_PASSWORD_' + this.mod),
      database: this.getValue('DB_DATABASE_' + this.mod),

      entities: ['dist/**/*.entity{.ts,.js}'],

      dropSchema: this.mod === 'development',
      synchronize: this.mod === 'development',

      migrationsTableName: 'migration',

      migrations: ['dist/migration/*.js'],

      cli: {
        migrationsDir: 'src/migration',
      },
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_PORT_',
  'DB_HOST_',
  'DB_USERNAME_',
  'DB_PASSWORD_',
  'DB_DATABASE_',
]);

export { configService };
