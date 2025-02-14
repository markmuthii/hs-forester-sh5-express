import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  // This is where all the logic is

  res.json({
    name: "John Wick",
    message: "GET Request Received on home route",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "POST Request Received on home route",
  });
});

app.get("/students/:studentId/devices", (req, res) => {
  console.log(req);

  res.json({
    message: "Received",
  });
});

app.listen(3005); //localhost:3005
