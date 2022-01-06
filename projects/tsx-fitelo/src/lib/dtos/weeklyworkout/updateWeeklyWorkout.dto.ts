import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateOrReject,
} from 'class-validator';
import { DailyWorkoutDto } from './dailyWorkout.dto';
export class UpdateWeeklyworkoutDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  bmi?: string;

  @IsString()
  @IsOptional()
  level?: string;

  @IsString()
  @IsOptional()
  ageGroup?: string;

  @IsString()
  @IsOptional()
  target?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  equipment?: string;

  @IsNumber()
  @IsOptional()
  submittedBy?: number;

  @IsOptional()
  @IsNumber()
  approvedBy?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @IsOptional()
  @ValidateNested()
  @IsArray()
  @Type(() => DailyWorkoutDto)
  dailyWorkouts?: DailyWorkoutDto[];

  constructor() {}

  async validate() {
    try {
      await validateOrReject(this);
      return true;
    } catch (errors) {
      console.log('Dto Validation Failed. Errors: ', errors);
      return false;
    }
  }
}
