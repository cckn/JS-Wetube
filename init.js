import app from "./app";

const PORT = 3000;

const listeningHandler = () => {
  console.log(`Example app listening on http://localhost:${PORT} !`);
};

app.listen(PORT, listeningHandler);
