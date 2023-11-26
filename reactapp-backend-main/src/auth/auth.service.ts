import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { WishlistItemDto } from './dto/whishlist.dto';
import { CartItemDto } from './dto/cart.dto';
import { AddressDto } from './dto/address.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtServce: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { name, email, password } = signUpDto;
    const checkUser = await this.userModel.findOne({ email });
    if (checkUser) {
      throw new ConflictException('Email already exists');
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      name,
      email,
      password: hashedpassword,
    });

    return {
      success: true,
      message: 'User Created Successfully',
      user: user.email,
      id: user.id,
    };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.jwtServce.sign({ id: user._id });
    return { token };
  }

  async addtoWishlist(userId: string, wishlistItemDto: WishlistItemDto) {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Check if the product is already in the wishlist
      const isProductInWishlist = (user.wishlist || []).some(
        (item) => item.product_id === wishlistItemDto.product_id,
      );

      if (isProductInWishlist) {
        throw new NotFoundException('Product is already in the wishlist');
      }

      // Add the new wishlist item
      user.wishlist.push({
        product_id: wishlistItemDto.product_id,
      });

      // Save the updated user
      await user.save();

      return {
        success: true,
        message: 'Product added to wishlist successfully',
        wishlist: user.wishlist,
      };
    } catch (err) {
      return {
        success: false,
        message: 'Error occoured while adding Product to cart',
        error: err.message,
      };
    }
  }

  async addToCart(userId: string, cartItemDto: CartItemDto) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const isProductInCart = (user.cart || []).some(
        (item) => item.product_id === cartItemDto.product_id,
      );

      if (isProductInCart) {
        throw new NotFoundException('Product is already in the cart');
      }

      user.cart.push({
        product_id: cartItemDto.product_id,
        quantity: cartItemDto.quantity,
      });

      await user.save();
      console.log('User after update:', user);

      return {
        success: true,
        message: 'Product added to cart successfully',
        cart: user.cart,
      };
    } catch (err) {
      return {
        success: false,
        message: 'Error occoured while adding Product to cart',
        error: err.message,
      };
    }
  }

  async updateWishlist(userId: string, product: any) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const isProductInWishlist = (user.wishlist || []).some(
        (item) => item.product_id === product.product_id,
      );

      if (isProductInWishlist) {
        user.wishlist = user.wishlist.filter(
          (item) => item.product_id !== product.product_id,
        );

        await user.save();

        return {
          success: true,
          message: 'Product removed from wishlist successfully',
          wishlist: user.wishlist,
        };
      } else {
        return {
          success: false,
          message: 'Product not found in the wishlist',
        };
      }
    } catch (err) {
      return {
        success: false,
        message: 'Error occurred while removing product from wishlist',
        error: err.message,
      };
    }
  }

  async updateCart(userId: string, product: any) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const isProductInCart = (user.cart || []).some(
        (item) => item.product_id === product.product_id,
      );

      if (isProductInCart) {
        // Remove the product from the cart
        user.cart = user.cart.filter(
          (item) => item.product_id !== product.product_id,
        );

        // Save the updated user object to the database
        await user.save();

        return {
          success: true,
          message: 'Product removed from cart successfully',
          cart: user.cart,
        };
      } else {
        return {
          success: false,
          message: 'Product not found in the cart',
        };
      }
    } catch (err) {
      return {
        success: false,
        message: 'Error occurred while removing product from cart',
        error: err.message,
      };
    }
  }

  async placeOrder(userId: string) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.cart.length === 0) {
        throw new NotFoundException('Cart Already Empty');
      }

      user.cart = [];

      await user.save();

      return {
        success: true,
        message: 'Order placed successfully. Cart is now empty.',
      };
    } catch (err) {
      return {
        success: false,
        message: 'Error occurred while placing order',
        error: err.message,
      };
    }
  }

  async addAddress(userId: string, AddressDto: AddressDto) {
    try {
      const user = await this.userModel.findById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      user.address.push({
        firstName: AddressDto.firstName,
        lastName: AddressDto.lastName,
        address: AddressDto.address,
        city: AddressDto.city,
        country: AddressDto.country,
        state: AddressDto.state,
        postalCode: Number(AddressDto.postalCode),
        phoneNumber: Number(AddressDto.phoneNumber),
      });

      await user.save();

      return {
        success: true,
        message: 'Address Saved successfully',
        Address: user.address,
      };
    } catch (err) {
      return {
        success: false,
        message: 'Error occoured while saving address',
        error: err.message,
      };
    }
  }

  async getSavedAddress(userId: string) {
    try {
      const user = await this.userModel.findById(userId);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user.address;
    } catch (err) {
      return {
        success: false,
        message: 'Error occoured while fetching saved address',
        error: err.message,
      };
    }
  }
}
