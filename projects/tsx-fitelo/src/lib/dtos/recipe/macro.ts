import { IsNumber, IsOptional, IsString } from 'class-validator';

export class Macro {
  @IsString()
  @IsOptional()
  name!: string;

  @IsNumber()
  @IsOptional()
  value!: number;

  @IsString()
  @IsOptional()
  unit!: string;
}
