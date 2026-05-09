const pool = require("./pool.js");

async function getGroomingOrders() {
  const { rows } = await pool.query("SELECT * FROM grooming_orders ");
  return rows;
}

async function getGroomingOrder(id) {
  const { rows } = await pool.query("SELECT * FROM grooming_orders WHERE id = $1", [`%${dog}%`]);
  return rows;
}

async function insertGroomingOrder(groomingOrder) {
  await pool.query("INSERT INTO grooming_orders (dog,grooming_request,added) VALUES ($1,$2,$3)", [groomingOrder.dog, groomingOrder.groomingRequest, groomingOrder.added]);
}

async function deleteGroomingOrder(id) {
  await pool.query("DELETE FROM grooming_orders WHERE dog LIKE $1", [`%${dog}%`]);
}
