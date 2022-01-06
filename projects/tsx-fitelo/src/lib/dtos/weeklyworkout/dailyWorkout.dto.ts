import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { WorkoutDto } from '../routine/workout.dto';
export class DailyWorkoutDto {
  @IsNumber()
  @IsOptional()
  day?: number; // 1 for monday

  @ValidateNested()
  @IsArray()
  @Type(() => WorkoutDto)
  @IsOptional()
  workouts?: WorkoutDto[];

  constructor() {}
}
