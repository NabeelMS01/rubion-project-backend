import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  password?: string;

  
}
export const UserSchema = SchemaFactory.createForClass(User);
