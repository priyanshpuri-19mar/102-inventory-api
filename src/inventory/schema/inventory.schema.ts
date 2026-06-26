import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  quantity!: number;

  @Prop()
  description!: string;

  @Prop()
  category!: string;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);