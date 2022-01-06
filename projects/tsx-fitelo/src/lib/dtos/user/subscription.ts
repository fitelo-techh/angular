import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class Subscription {
  @IsString()
  @IsOptional()
  planName?: string;

  @IsNumber()
  @IsOptional()
  discount?: number;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsNumber()
  @IsOptional()
  extension?: number;

  @IsArray()
  @IsOptional()
  pause_history?: { start: string, end: string }[];

  @IsNumber()
  transactionId?: string;
}

