import { IsNotEmpty, IsString } from 'class-validator';

export class WishlistItemDto {
  @IsString()
  @IsNotEmpty()
  product_id: string;
}