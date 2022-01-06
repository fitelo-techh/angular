import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  validateOrReject,
} from 'class-validator';

export class UpdateAdminDto {
  @IsEmail()
  @IsString()
  @IsOptional()
  email?: string;

  @IsPhoneNumber()
  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  photoURL?: string;

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
  @IsOptional()
  roleId?: number | null;

  @IsNumber()
  @IsOptional()
  teamId?: number | null;

  @IsString()
  @IsOptional()
  status?: string;

  @IsOptional()
  reportsPinnedBy?: number[] | null;

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
