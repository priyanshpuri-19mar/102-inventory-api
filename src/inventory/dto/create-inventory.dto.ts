import { IsString, IsNumber } from 'class-validator';

export class CreateInventoryDto {
  @IsString()
  name!: string;

  @IsNumber()
  quantity!: number;

  @IsString()
  description!: string;

  @IsString()
  category!: string;
}