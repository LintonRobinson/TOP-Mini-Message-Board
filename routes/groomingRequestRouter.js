const { Router } = require("express");

const groomingRequestRouter = Router();

groomingRequestRouter.get("/", (req, res) => {
  res.render("newGroomingRequest", { title: "New Grooming Request" });
});

module.exports = groomingRequestRouter;
