import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CartItemDto {
  @IsString()
  @IsNotEmpty()
  product_id: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  quantity: number;
}