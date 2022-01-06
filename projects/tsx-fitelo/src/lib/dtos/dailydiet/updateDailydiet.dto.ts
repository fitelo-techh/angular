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
export class UpdateDailyDietDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsNumber()
  @IsOptional()
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
