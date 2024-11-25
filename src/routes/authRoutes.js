import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router();

// Registrasi user baru oleh admin
router.post("/register", AuthController.register);

// Login user
router.post("/login", AuthController.login);

export default router;
