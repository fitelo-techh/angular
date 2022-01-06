import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  validateOrReject,
} from 'class-validator';
import { Macro } from './macro';

export class UpdateRecipeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsArray()
  conditions?: string[];

  @IsNumber()
  @IsOptional()
  calories?: number;

  @IsString()
  @IsOptional()
  blogLink?: string;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  groceryIds?: number[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => Macro)
  macros?: Macro[];

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
