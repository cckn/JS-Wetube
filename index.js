import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const handleHome = (req, res) => {
  res.send("Hello my ddd!");
};

const handleProfiles = (req, res) => {
  res.send("Hello my Profiles!");
};

const listeningHandler = () => {
  console.log(`Example app listening on http://localhost:${port} !`);
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfiles);

app.listen(port, listeningHandler);
