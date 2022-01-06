import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  validateOrReject
} from 'class-validator';

export class CreateAdminDto {
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
  displayName?: string;

  @IsString()
  @IsOptional()
  emergencyPhone?: string;

  @IsString()
  @IsOptional()
  personalEmail?: string;

  @IsString()
  @IsOptional()
  joiningDate?: string;

  @IsNumber()
  @IsOptional()
  reportingManager?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  experience?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  skillSet?: string;

  @IsString()
  @IsOptional()
  specialSkill?: string;

  @IsNumber()
  roleId: number;

  constructor( password: string, roleId: number) {
    this.password = password;
    this.roleId = roleId;
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
