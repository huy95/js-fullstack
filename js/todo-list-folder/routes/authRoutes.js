const express = require('express');
const AuthController = require("../controllers/authControllers");
const router = express.Router();


router.post("/register", AuthController.registerUser)
router.post('/login', AuthController.Login)

module.exports = router;

// PORT=3000
// MONGO_URI="mongodb+srv://huymawork:mxrWiDCQXSe2pBb7@cluster0.uinzmvx.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
// JWT_SECRET="12312swdasdasd"
