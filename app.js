import express from "express";
import { Router } from "express";
import mockRouter from "./routes/mocks.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const router = Router();
const app = express();

app.use(express.json());

app.use("/api/mocks", mockRouter);
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

mongoose
  .connect(process.env.MONGO_URI, { dbName: "Backend2" })
  .then(() => console.log("Mongo connection success"))
  .catch((er) => {
    console.log("Error Mongoose Connect");
    throw er;
  });
