const { Router } = require("express");
const { groomingRequests } = require("./indexRouter.js");

const groomingRequestRouter = Router();

groomingRequestRouter.get("/new", (req, res) => {
  res.render("newGroomingRequest", { title: "New Grooming Request" });
});

groomingRequestRouter.post("/new", (req, res) => {
  groomingRequests.push({ dog: req.body.dog_name, groomingRequests: req.body.grooming_requests, added: new Date() });
  res.redirect("/");
});

module.exports = groomingRequestRouter;
