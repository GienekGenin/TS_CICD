// tslint:disable
import { MigrationInterface, QueryRunner } from 'typeorm';

// tslint:disable-next-line:class-name
export class initial1579868755841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `insert into public.users values (1,'Gena', 'gena@gmail.com')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    //
  }
}
