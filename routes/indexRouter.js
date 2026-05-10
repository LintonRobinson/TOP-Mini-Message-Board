const { Router } = require("express");
const groomingRequestController = require("../controllers/groomingRequestController.js");

const indexRouter = Router();

indexRouter.get("/", groomingRequestController.getGroomingOrders);

module.exports = { indexRouter };
