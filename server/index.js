import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import DBconnect from './db.js'
import userRoutes from '../server/routes/userRoutes.js'
import authRoutes from '../server/routes/authRoutes.js'

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

DBconnect();
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
