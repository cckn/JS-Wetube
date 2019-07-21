import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";

const router = express.Router();

router.get(routes.users, users);
router.get(routes.editProfile, editProfile);
router.get(routes.changePassword, changePassword);
router.get(routes.userDetail(), userDetail);

export default router;
