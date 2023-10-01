import { Router } from "express";
import { MessageController } from "../controllers/message.controller.js";

const router = Router();
const messageController = new MessageController();

router.get("/user", messageController.findAll);
router.get("/user/:id", messageController.find);
router.create("/user", messageController.create);
router.update("/user", messageController.update);
router.delete("/user", messageController.delete);

export default router;
