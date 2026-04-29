const { Router } = require("express");

const groomingRequests = [
  {
    dog: "Niloo",
    groomingRequests: "Please do nails, and bath",
    added: new Date(),
  },
  {
    dog: "Roya",
    groomingRequests: "Please clean ears",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Grooming Requests", groomingRequests: groomingRequests });
});

module.exports = indexRouter;
