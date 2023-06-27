
import mongoose, { Document, Schema } from 'mongoose';
export interface IJob extends Document {
    jobName: string;
    status: boolean;
    jobLocation: string;
    companyDescription: string;
    jobDescription: string;
    demands: string
}
export const JobSchema = new Schema<IJob>({
  jobName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  jobLocation: {
    type: String,
    default: " ",
  },
  companyDescription: {
    type: String,
    default: " ",
  },
  jobDescription: {
    type: String,
    required: true,
  },
  demands: {
    type: String,
    required: true
  },
});
export default mongoose.model<IJob>('Job', JobSchema);
