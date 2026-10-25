
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  @IsEmail()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";
}

export class UpdateCustomerDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  phone?: string;
}
