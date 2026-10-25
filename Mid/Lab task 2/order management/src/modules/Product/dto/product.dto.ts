
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  category: string = "";

  @IsNotEmpty()
  @IsNumber()
  price: number = 0;

  @IsNotEmpty()
  @IsInt()
  quantity: number = 0;
}

export class UpdateProductDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  category?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsInt()
  quantity?: number;
}
