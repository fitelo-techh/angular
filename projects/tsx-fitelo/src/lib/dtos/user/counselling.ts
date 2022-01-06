import { IsDateString, IsString } from 'class-validator';

export class Counselling {
  @IsDateString()
  date!: string;

  @IsString()
  time!: string;

  @IsString()
  status!: string;
}
