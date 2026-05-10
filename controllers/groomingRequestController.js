const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");
const validatedGroomingOrder = [
  body("dog_name").trim().notEmpty().withMessage("Please enter dog name").isAlpha().withMessage("Dog name can not include numbers or special characters"),
  body("grooming_requests").trim().notEmpty().withMessage("Please enter grooming request"),
];

async function getGroomingOrders(req, res) {
  const groomingOrders = await db.getGroomingOrders();

  res.render("index", { title: "Grooming Order", groomingOrders: groomingOrders });
}

async function getGroomingOrder(req, res) {
  const groomingOrder = await db.getGroomingOrder(Number(req.params.id));
  res.render("groomingRequest", { title: `${groomingOrder[0].dog}'s Grooming Request`, groomingRequest: groomingOrder[0] });
}

async function insertGroomingOrder(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("newGroomingRequest", { title: "New Grooming Request", errors: errors.array() });
  }
  const { dog_name, grooming_requests } = matchedData(req);
  await db.insertGroomingOrder({ dog_name, grooming_requests, added: new Date() });
  res.redirect("/");
}

async function deleteGroomingOrder(req, res) {
  await db.deleteGroomingOrder(req.params.id);
  res.redirect("/");
}

module.exports = {
  insertGroomingOrder,
  getGroomingOrders,
  getGroomingOrder,
  validatedGroomingOrder,
  deleteGroomingOrder,
};
