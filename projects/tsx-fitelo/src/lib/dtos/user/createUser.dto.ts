import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  validateOrReject
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string;

  @IsPhoneNumber()
  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsDateString()
  @IsOptional()
  dob?: string;

  constructor( password: string ) {
    this.password = password;
  }

  async validate() {
    try {
      if (!this.phone && !this.email) return false;
      await validateOrReject(this);
      return true;
    } catch (errors) {
      console.log('Dto Validation Failed. Errors: ', errors);
      return false;
    }
  }
}
