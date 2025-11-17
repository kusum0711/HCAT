import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProjectManagement1763403497346 implements MigrationInterface {
  name = 'ProjectManagement1763403497346';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."projects_status_enum" AS ENUM('ACTIVE', 'ONHOLD', 'COMPLETED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "projects" ("id" BIGSERIAL NOT NULL, "name" character varying(70) NOT NULL, "description" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NULL, "status" "public"."projects_status_enum" NOT NULL, "manager_id" bigint NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bfc4445c8dd98137bc056610371" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "projects"`);
    await queryRunner.query(`DROP TYPE "public"."projects_status_enum"`);
  }
}
