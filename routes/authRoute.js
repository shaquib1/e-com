import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";



//router object
const router = express.Router();


// routing
// register || post method
router.post('/register' , registerController)

// login || post method
router.post('/login' , loginController)

// test router
router.get('/test' , requireSignIn, isAdmin ,testController)

export default router;