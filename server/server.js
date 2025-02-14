import express from "express";

const app = express();

app.use((req, res, next) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    name: "John Wick",
    message: "GET Request Received on home route",
  });
});

app.use((req, res, next) => {
  console.log("I have passed through SECOND middleware");

  next();
});

app.post("/", (req, res) => {
  res.json({
    message: "POST Request Received on home route",
  });
});

app.listen(3005, () => {
  console.log("The server is running on port 3005");
}); //localhost:3005
