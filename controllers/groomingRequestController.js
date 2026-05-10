const db = require("../db/queries");

async function insertGroomingOrder(req, res) {
  await db.insertGroomingOrder(req.body);
  res.redirect("/");
}

async function getGroomingOrder(req, res) {
  const groomingOrder = await db.getGroomingOrder(Number(req.params.id));
  console.log("groomingOrder", groomingOrder);
  res.render("groomingRequest", { title: `${groomingOrder[0].dog}'s Grooming Request`, groomingRequest: groomingOrder[0] });
}

async function getGroomingOrders(req, res) {
  const groomingOrders = await db.getGroomingOrders();
  res.render("index", { title: "Grooming Order", groomingOrders: groomingOrders });
}

module.exports = {
  insertGroomingOrder,
  getGroomingOrders,
  getGroomingOrder,
};
