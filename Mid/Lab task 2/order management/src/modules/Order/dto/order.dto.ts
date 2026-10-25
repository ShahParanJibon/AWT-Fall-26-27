
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
} from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  customer_id: string = "";

  @IsNotEmpty()
  @IsUUID()
  product_id: string = "";

  @IsNotEmpty()
  @IsInt()
  quantity: number = 0;

  @IsNotEmpty()
  @IsNumber()
  total_amount: number = 0;
}

export class UpdateOrderDto {
  @IsOptional()
  @IsUUID()
  customer_id?: string;

  @IsOptional()
  @IsUUID()
  product_id?: string;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  total_amount?: number;
}
