import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  ValidateNested,
  validateOrReject,
} from 'class-validator';
import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';

export class UpdateRoutineDto {
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
