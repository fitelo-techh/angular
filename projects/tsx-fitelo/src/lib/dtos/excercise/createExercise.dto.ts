import { IsArray, IsNumber, IsOptional, IsString, validateOrReject } from 'class-validator';
export class CreateExerciseDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsString()
  videoLink?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsNumber()
  caloriesBurn?: number;

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
