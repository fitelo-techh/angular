import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsOptional,
  ValidateNested,
  validateOrReject,
} from 'class-validator';

import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';

export class CreateRoutineDto {
  @IsDateString()
  date: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => MealDto)
  meals?: MealDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => WorkoutDto)
  workouts?: WorkoutDto[];

  constructor(date: string) {
    this.date = date;
  }

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
