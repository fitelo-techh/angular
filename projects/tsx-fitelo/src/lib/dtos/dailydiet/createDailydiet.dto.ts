import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateOrReject,
} from 'class-validator';
import { MealDto } from '../routine/meal.dto';


export class CreateDailyDietDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  submittedBy?: number;

  @IsOptional()
  @IsNumber()
  approvedBy?: number;

  @IsString()
  @IsOptional()
  status?: string;

  @ValidateNested()
  @IsOptional()
  @IsArray()
  @Type(() => MealDto)
  meals?: MealDto[];

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
