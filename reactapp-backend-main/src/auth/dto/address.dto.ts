import { IsString, IsInt, IsNotEmpty, Max, Min, MaxLength} from 'class-validator';

export class AddressDto {

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsInt()
  @IsNotEmpty()
  @Min(5, { message: 'Postal Code must not exceed 6 digits' })
  postalCode: number;

  @IsInt()
  @IsNotEmpty()
  @Min(9, { message: 'Phone number must not exceed 10 digits' })
  phoneNumber: number;
}
