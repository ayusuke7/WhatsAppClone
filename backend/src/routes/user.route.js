import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const router = Router();
const userController = new UserController();

router.get("/user", userController.findAll);
router.get("/user/:id", userController.find);
router.create("/user", userController.create);
router.update("/user", userController.update);
router.delete("/user", userController.delete);

export default router;
