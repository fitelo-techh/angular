import { IsOptional, IsString, validateOrReject } from 'class-validator';
export class UpdateGroceryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsString()
  quantity?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  buyLink?: string;

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
