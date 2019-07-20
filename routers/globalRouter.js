import express from "express";
import routes from "../routes";

const router = express.Router()

router.get(routes.home, (req,res)=>res.send("home"))
router.get(routes.join, (req,res)=>res.send("join"))
router.get(routes.login, (req,res)=>res.send("login"))
router.get(routes.logout, (req,res)=>res.send("logout"))
router.get(routes.search, (req,res)=>res.send("search"))



export default router