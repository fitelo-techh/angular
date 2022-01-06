import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class MealDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  time?: string;

  @IsBoolean()
  @IsOptional()
  mealTaken?: boolean;

  @IsString()
  @IsOptional()
  mealNote?: string;

  @IsArray()
  @IsOptional()
  recipes?: (number | string)[];

  constructor() {}
}
