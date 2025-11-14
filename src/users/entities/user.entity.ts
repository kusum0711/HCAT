import { UserType } from '../../utils/constant';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({name:'users'})
export class User extends BaseEntity{
  @PrimaryGeneratedColumn({type:'bigint'})
  id: number;

  @Column({length:70})
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({length:70})
  password: string;

  @Column({ type: 'enum', enum: UserType })
  role: UserType;

   @Column({type:'bigint'})
  reports_to: Number;

  @Column({type:'bigint'})
  team_id: number;

  @Column({type:'bigint'})
  project_id: number;
}
