// transaction.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  country: string;

  @Prop({ type: String, required: true })
  state: string;
  
  @Prop({ type: Number, required: true })
  postalCode: number;

  @Prop({ type: Number, required: true })
  phoneNumber: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
