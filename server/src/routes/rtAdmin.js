import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { createShopping, getShopping } from "../controllers/adminContoller.js";
const router = Router();

router.post("/signup", signUp);
router.post("/shopping-up", createShopping);
router.get("/shopping", getShopping);
export default router;
