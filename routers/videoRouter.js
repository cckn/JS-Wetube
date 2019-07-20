import express from "express";
import routes from "../routes";
import {
  videos,
  upload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";

const router = express.Router();

router.get(routes.videos, videos);
router.get(routes.upload, upload);
router.get(routes.videoDetail, videoDetail);
router.get(routes.editVideo, editVideo);
router.get(routes.deleteVideo, deleteVideo);

export default router;
