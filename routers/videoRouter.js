import express from "express";
import routes from "../routes";

const router = express.Router();

router.get(routes.videos, (req, res) => res.send("videos"));
router.get(routes.upload, (req, res) => res.send("upload"));
router.get(routes.videoDetail, (req, res) => res.send("videoDetail"));
router.get(routes.editVideo, (req, res) => res.send("editVideo"));
router.get(routes.deleteVideo, (req, res) => res.send("deleteVideo"));

export default router;
