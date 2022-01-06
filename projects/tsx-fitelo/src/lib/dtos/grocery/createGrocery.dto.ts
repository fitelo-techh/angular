import { IsOptional, IsString, validateOrReject } from 'class-validator';
export class CreateGroceryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  quantity?: string;

  @IsOptional()
  @IsString()
  thumbnail?: string;

  @IsOptional()
  @IsString()
  buyLink?: string;

  constructor(name: string, quantity?: string, thumbnail?: string, buyLink?: string) {
    this.name = name;
    this.quantity = quantity;
    this.thumbnail = thumbnail;
    this.buyLink = buyLink;
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
