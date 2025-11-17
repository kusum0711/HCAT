import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return await Project.find();
  }

  async findOne(id: number): Promise<Project | null> {
    const project = await Project.findOneBy({ id });
    return project;
  }

  async findBy(query: object) {
    return await Project.findOne(query);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    await Project.update({ id }, updateProjectDto);
    return await Project.findOneBy({ id });
  }

  async remove(id: number) {
    await Project.delete({ id });
    return { deleted: true };
  }
}
