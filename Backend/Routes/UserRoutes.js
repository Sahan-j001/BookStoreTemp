const express = require("express");
const router = express.Router();
//Insert Model
const User = require("../Model/UserModel");
//Set usercontroller
const UserController = require("../Controllers/UserController");
const AuthController = require("../Controllers/AuthController");

// If UserController exports an object with methods, use the correct method, e.g., getUsers
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/verify-email", UserController.verifyEmail);
router.get("/:id", UserController.getById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.post('/login', UserController.loginUser);
router.post('/verify-otp', AuthController.verifyOtp);

//export
module.exports = router;