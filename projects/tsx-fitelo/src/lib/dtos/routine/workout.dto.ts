import { Type } from 'class-transformer';
import { IsString, IsArray, IsNumber, IsBoolean, IsOptional, ValidateNested } from 'class-validator';

export class ExerciseDto {
  @IsOptional()
  id?: number | string;

  @IsNumber()
  @IsOptional()
  sets?: number;

  @IsNumber()
  @IsOptional()
  repsPerSet?: number;

  @IsString()
  @IsOptional()
  duration?: string;

  constructor() {};
}

export class WorkoutDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  time?: string;

  @IsBoolean()
  @IsOptional()
  workoutDone?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => ExerciseDto)
  exercises?: ExerciseDto[];

  constructor() {}
}
