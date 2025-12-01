import { User } from '../../users/entities/user.entity';
import { Project } from '../../projects/entities/project.entity';
import { Team } from '../../teams/entities/team.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany } from 'typeorm';

@Entity({ name: 'managers' })
export class Manager extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ length: 70 })
  name: string;

  @Column({ unique: true })
  email: string;

  // One manager has many teams
  @OneToMany(() => Team, (team) => team.manager)
  teams: Team[];

    // One manager has many users
  @OneToMany(() => User, (user) => user.manager)
  users: User[];

  // Many managers work on many projects
  @ManyToMany(() => Project, (project) => project.managers)
  projects: Project[];
}
