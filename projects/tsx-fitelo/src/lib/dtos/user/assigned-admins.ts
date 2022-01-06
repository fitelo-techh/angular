import { IsString } from 'class-validator';

export class AssignedAdmins {
  @IsString()
  dietitian!: number | null;

  @IsString()
  sp!: number | null;

  @IsString()
  rm!: number | null;
}
