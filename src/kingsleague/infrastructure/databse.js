import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const {MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_HOST} = process.env;
const MONGODB_URI =  `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}`;
console.log(process.env.MONGODB_HOST)
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((db)=>console.log('db connected'));