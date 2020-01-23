import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(config.serverPort);
    // tslint:disable-next-line:no-console
    console.log(`Server started at ${config.serverPort}`);
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.error('Start up express error: ', e);
  }
}
bootstrap();
