import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateOrReject,
} from 'class-validator';
import { DailyDietDto } from './dailyDiet.dto';
export class CreateWeeklydietDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString({ each: true })
  @IsOptional()
  @IsArray()
  conditions?: string[];

  @IsString()
  @IsOptional()
  dietPreference?: string;

  @IsString()
  @IsOptional()
  firstMajorFood?: string;

  @IsString()
  @IsOptional()
  secondMajorFood?: string;

  @IsString()
  @IsOptional()
  target?: string;

  @IsString()
  @IsOptional()
  portionSize?: string;

  @IsString()
  @IsOptional()
  residenceType?: string;

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
  @Type(() => DailyDietDto)
  dailyDiets?: DailyDietDto[];

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
