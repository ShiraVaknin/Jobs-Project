
import mongoose, { Document, Schema } from 'mongoose';
export interface ICandidate extends Document {
    id: number;
    name: string;
    phone: string;
    rating: number;
    email: string;
}
export const CandidateSchema = new Schema<ICandidate>({
    id: {
    type: Number,
    //required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rating: {
    type:Number,
    default:0
  },
  email: {
    type: String,
    required:true
  },
});
export default mongoose.model<ICandidate>('candidate', CandidateSchema);
