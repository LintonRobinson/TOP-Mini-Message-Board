const { Router } = require("express");
const { groomingRequests } = require("./indexRouter.js");
const groomingRequestController = require("../controllers/groomingRequestController.js");

const groomingRequestRouter = Router();

groomingRequestRouter.get("/new", (req, res) => {
  res.render("newGroomingRequest", { title: "New Grooming Request" });
});

groomingRequestRouter.post("/new", groomingRequestController.insertGroomingOrder);

groomingRequestRouter.get("/:id", groomingRequestController.getGroomingOrder);

module.exports = groomingRequestRouter;
