import { Router } from "express";
import express from "express";
import rtAdmin from "./rtAdmin.js";
import rtUser from "./rtUser";
import { signIn } from "../controllers/authController.js";

const router = Router();
router.use(express.json());
router.use("/user", rtUser);
router.post("/login/signin", signIn);
router.use("/admin", rtAdmin);
export default router;
