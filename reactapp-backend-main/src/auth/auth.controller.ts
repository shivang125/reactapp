import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AddressDto } from './dto/address.dto';
import { CartItemDto } from './dto/cart.dto';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { WishlistItemDto } from './dto/whishlist.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  //Signup Controller
  @ApiTags('User')
  @ApiResponse({
    status: 201,
    description: 'User Created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing/Invalid Parameter',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid email or password',
  })
  @Post('/register')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  //Login Controller
  @ApiTags('User')
  @ApiResponse({
    status: 201,
    description: 'Admin Login successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing/Invalid Parameter',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid email or password',
  })
  @Post('users/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  //Add Item to Wishlist
  @ApiTags('User')
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @ApiResponse({
    status: 201,
    description: 'Item Wishlist successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing/Invalid Parameter',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid productId',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('users/add-to-wishlist/:id')
  async wishlistItem(
    @Param('id') userId: string,
    @Body() wishlistItemDto: WishlistItemDto,
  ) {
    const result = await this.authService.addtoWishlist(
      userId,
      wishlistItemDto,
    );
    return result;
  }

//Remove an item from Wishlist
@ApiResponse({
    status: 200,
    description: 'Item removed successfully',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Put('users/remove-from-wishlist/:id')
  async removeWishlistItem(@Param('id') userId: string, @Body() product: any) {
    const result = await this.authService.updateWishlist(userId, product);
    return result;
  }

  //Add item to cart
  @ApiResponse({
    status: 201,
    description: 'Item added to Cart successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing/Invalid Parameter',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid productId',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('/cart/:id')
  async addToCart(
    @Param('id') userId: string,
    @Body() cartItemDto: CartItemDto,
  ) {
    const result = await this.authService.addToCart(userId, cartItemDto);
    return result;
  }

  //Remove an item from cart
  @ApiResponse({
    status: 200,
    description: 'Order placed successfully. Cart is now empty.',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Put('/update-cart/:id')
  async removeCartItem(@Param('id') userId: string, @Body() product: any) {
    const result = await this.authService.updateCart(userId, product);
    return result;
  }

  //Place order and empty Cart Items
  @ApiResponse({
    status: 200,
    description: 'Order placed successfully. Cart is now empty.',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('/place-order/:id')
  async placeOrder(@Param('id') userId: string) {
    const result = await this.authService.placeOrder(userId);
    return result;
  }

  //Add Shipping address
  @ApiResponse({
    status: 201,
    description: 'Item added to Cart successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing/Invalid Parameter',
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid productId',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Post('users/update-shipping-address/:id')
  async addShippingAddress(
    @Param('id') userId: string,
    @Body() AddressDto: AddressDto,
  ) {
    const result = await this.authService.addAddress(userId, AddressDto);
    return result;
  }

  // Get All Saved Address
  @ApiResponse({
    status: 200,
    description: 'Order placed successfully. Cart is now empty.',
  })
  @ApiBearerAuth()
  // @UseGuards(AuthGuard())
  @Get('/address/:id')
  async savedAddress(@Param('id') userId: string) {
    const result = await this.authService.getSavedAddress(userId);
    return result;
  }
}
