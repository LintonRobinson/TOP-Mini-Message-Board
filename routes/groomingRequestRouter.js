const { Router } = require("express");
const groomingRequestController = require("../controllers/groomingRequestController.js");

const groomingRequestRouter = Router();

groomingRequestRouter.get("/new", (req, res) => {
  res.render("newGroomingRequest", { title: "New Grooming Request" });
});

groomingRequestRouter.post("/new", groomingRequestController.validatedGroomingOrder, groomingRequestController.insertGroomingOrder);

groomingRequestRouter.post("/delete/:id", groomingRequestController.deleteGroomingOrder);

groomingRequestRouter.get("/:id", groomingRequestController.getGroomingOrder);

module.exports = groomingRequestRouter;
