import { videos as videosData } from "../db";

export const home = (req, res) => {
  const db = videosData
  res.render("home", { pageTitle: "Home" ,videosData});
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy ,videosData});
};

export const videos = (req, res) => {
  res.render("videos", { pageTitle: "Videos" });
};
export const upload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "VideoDetail" });
};
export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "EditVideo" });
};
export const deleteVideo = (req, res) => {
  res.render("deleteVideo", { pageTitle: "DeleteVideo" });
};
