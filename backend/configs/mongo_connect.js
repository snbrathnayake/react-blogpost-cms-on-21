import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongodbConnect = async () => {
  console.log('Trying to connect database [mongodb]');
  try {
    await mongoose.connect(process.env.LOCAL_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection has successfully\n');
  } catch (error) {
    console.log('Connection has failed\n', error.message);
    process.exit(1);
  } finally {
    console.log(`database connection URI [${process.env.LOCAL_DB_URI}]\n`);
  }
};

export default mongodbConnect;
