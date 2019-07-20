import express from "express";
import routes from "../routes";

const router = express.Router();

router.get(routes.users, (req, res) => res.send("users"));
router.get(routes.userDetail, (req, res) => res.send("userDetail"));
router.get(routes.editProfile, (req, res) => res.send("editProfile"));
router.get(routes.changePassword, (req, res) => res.send("changePassword"));

export default router;
