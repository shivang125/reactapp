import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Address, AddressSchema } from './address.schema';

@Schema({
  timestamps: false,
})
export class User {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email found'] })
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [AddressSchema], default: [] })
  address: Address[];

  @Prop({ default: [] })
  cart: Array<{
    product_id: string;
    quantity: number;
  }>;

  @Prop({ default: [] })
  wishlist: Array<{
    product_id: string;
  }>;
}

export const UserSchema = SchemaFactory.createForClass(User);
