import express from "express";

const app = express();
const PORT = 5000;

app.listen(3000, () => {
  console.log(`server is running on ${PORT}`);
});
