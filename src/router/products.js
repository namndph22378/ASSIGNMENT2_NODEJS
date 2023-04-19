import { getAll, getProduct,postProduct,putProduct,deleteProduct } from "../controller/products";
import express from "express";
const router = express.Router();
router.get("/products",getAll);
router.get("/products/:id",getProduct);
router.post("/products",postProduct);
router.put("/products/:id",putProduct);
router.delete("/products/:id",deleteProduct);
export default router;
