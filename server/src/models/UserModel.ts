// UserModel.ts:
import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  password: string;
  address?: string;
  organization?: string;
  threatLevel?: number;
  alerts?: mongoose.Types.ObjectId;
  createdAt: Date;
  lastActive?: Date;
  imageBase64?: string;
  
}

export interface IUserModel extends Model<IUser> { }

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  organization: { type: String },
  threatLevel: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  imageBase64: { 
    type: String,  
    default: ''    
},
});

userSchema.index({ threatLevel: -1 });

export default mongoose.model<IUser, IUserModel>("User", userSchema);
