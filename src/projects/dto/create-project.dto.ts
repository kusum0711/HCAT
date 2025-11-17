import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { statusType } from '../../utils/constant';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  manager_id: number;

  @IsNotEmpty()
  @IsString()
  status: statusType;

  @IsNotEmpty()
  start_date: Date;

  @IsOptional()
  end_date: Date;
}
