import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({name:'managers'})
export class Manager extends BaseEntity{
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column({length:70})
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({type:'bigint'})
  team_id: number;
}
