import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail,
  IsPhoneNumber,
  ValidateNested,
  validateOrReject,
} from 'class-validator';

import { Subscription } from './subscription';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

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
  photoURL?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  dob?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsNumber()
  @IsOptional()
  dietitianId?: number;

  @IsNumber()
  @IsOptional()
  salesPersonId?: number;

  @IsNumber()
  @IsOptional()
  relationManagerId?: number;

  @IsNumber()
  @IsOptional()
  subscription_duration?: number;

  @IsString()
  @IsOptional()
  subscription_status?: string;

  @IsString()
  @IsOptional()
  subscription_endDate?: string | null;

  @IsString()
  @IsOptional()
  subscription_planPauseDate?: string | null;

  @IsString()
  @IsOptional()
  subscription_extensionEndDate?: string | null;

  @IsOptional()
  @ValidateNested()
  subscription?: Subscription | null;

  @IsString()
  @IsOptional()
  counselling_date?: string;

  @IsString()
  @IsOptional()
  counselling_time?: string;

  @IsString()
  @IsOptional()
  counselling_status?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  followup_dt?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  followup_sp?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  followup_rm?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  dietDays?: string[];

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  pinnedBy?: number[];

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  rosterPinnedBy?: number[];

  @IsOptional()
  customFields?: { [key: string]: any };

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsNumber()
  @IsOptional()
  height?: number;

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
