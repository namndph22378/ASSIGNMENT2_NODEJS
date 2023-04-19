import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routerSign from "./router/index"
import routerProducts from "./router/products"

//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api", routerProducts);
app.use("/api", routerSign);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
