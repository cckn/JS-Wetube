import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const router = express.Router();

router.get(routes.home, home);
router.get(routes.search, search);
router.get(routes.join, join);
router.get(routes.login, login);
router.get(routes.logout, logout);

export default router;
