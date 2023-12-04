import express from "express";
import { body } from "express-validator";
import * as authController from "../controller/auth.js";
import { validate } from "../middleware/validator.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("password should be at least 5 characters"),
];

const validateSignup = [
  ...validateCredential,
  body("name").trim().notEmpty().withMessage("name is missing."),
  body("email").trim().isEmail().normalizeEmail().withMessage("invalid email"),
  body("url")
    .trim()
    .isURL()
    .withMessage("invalid URL")
    .optional({ nullable: true, checkFalsy: true }), // 데이터가 없거나 텅텅빈 문자열이라도 허용해줍니다.
];

// POST /auth/login
router.post("/login", validateCredential, validate, authController.login);

// POST /auth/signup
router.post("/signup", validateSignup, validate, authController.signup);

// POST /auth/me
router.post("/me", isAuth, authController.me);

export default router;
