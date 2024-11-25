// MessageModel.ts:
import mongoose, { Document } from 'mongoose';

export interface IMessage extends Document {
    senderId: string;   
    receiverId: string;
    content: string;
    timestamp: Date;
    isFlagged: boolean;
    suspiciousWords: string[];
    analyzedBy: mongoose.Types.ObjectId;
  }

const MessageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    isFlagged: { type: Boolean, default: false },
    suspiciousWords: [{ type: String }],
    analyzedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } });
  
  MessageSchema.index({ isFlagged: 1, timestamp: -1 });