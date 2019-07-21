import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin
} from "../controllers/userController";

const router = express.Router();

router.get(routes.join, getJoin);
router.post(routes.join, postJoin);

router.get(routes.login, getLogin);
router.post(routes.login, postLogin);

router.get(routes.home, home);
router.get(routes.search, search);
router.get(routes.logout, logout);

export default router;
