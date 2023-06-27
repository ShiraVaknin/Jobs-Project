
import mongoose, { Connection } from 'mongoose';
import env from 'dotenv';


env.config()

const url = process.env.DB_CONNECT;

const connectDB = async (): Promise<Connection> => {
  const connection = await mongoose.connect(url!);
  return connection.connection;
};

const database = mongoose.connection;

database.on('error', (error: Error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Connect to DB');
});

export default connectDB;