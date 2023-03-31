import { Router } from "express";
import { getShopping } from "../controllers/userController";
const router = Router();

router.get("/shopping", getShopping);

export default router;
