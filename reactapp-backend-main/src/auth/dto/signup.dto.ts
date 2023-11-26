import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This field Expects Full name of the User',
    example: '',
  })
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This field Expects email of the User',
    example: '',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'This field Expects password of the User',
    example: '',
  })
  readonly password: string;
}
