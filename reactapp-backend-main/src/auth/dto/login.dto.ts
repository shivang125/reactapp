import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'This field expects an email address',
    example: '',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'The password lenght should be minimum 8 characters',
    example: '',
  })
  readonly password: string;

}
