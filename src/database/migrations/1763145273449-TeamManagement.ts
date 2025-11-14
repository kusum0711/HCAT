import { MigrationInterface, QueryRunner } from "typeorm";

export class TeamManagement1763145273449 implements MigrationInterface {
    name = 'TeamManagement1763145273449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teams" ("id" BIGSERIAL NOT NULL, "team_name" character varying(70) NOT NULL, "manager_id" bigint NOT NULL, CONSTRAINT "PK_10ccce4d7d878c221ee7c5c8057" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "teams"`);
    }

}
