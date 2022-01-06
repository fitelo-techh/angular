import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { MealDto } from '../routine/meal.dto';

export class DailyDietDto {
  @IsNumber()
  @IsOptional()
  day?: number; // 1 for monday

  @ValidateNested()
  @IsArray()
  @Type(() => MealDto)
  @IsOptional()
  meals?: MealDto[];

  constructor() {}
}
