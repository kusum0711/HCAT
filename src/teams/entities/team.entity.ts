import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({name:'teams'})
export class Team extends BaseEntity{
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column({length:70})
  team_name: string;


  @Column({type:'bigint'})
  manager_id: number;
}
