import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = this.teamRepository.create(createTeamDto);
    return await this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return await Team.find();
  }

  async findone(id: number): Promise<Team | null> {
    const team = await Team.findOneBy({ id });
    return team;
  }

  async findBy(query: object) {
    return await Team.findOne(query);
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    await Team.update({ id }, updateTeamDto);
    return await Team.findOneBy({ id });
  }

  async remove(id: number) {
    await Team.delete({ id });
    return { deleted: true };
  }
}
