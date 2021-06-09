const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/hello", (req, res, next) => {
  res.send({
    message: "hello visitor!!!!",
  });
});

module.exports = apiRouter;
