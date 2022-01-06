import {
  IsArray,
  IsOptional,
  IsString,
  validateOrReject
} from 'class-validator';
import { Permission } from './createRole.dto';

export class UpdateRoleDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsArray()
  @IsOptional()
  permissions?: Permission[];

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
