const pool = require("./pool.js");

async function getGroomingOrders() {
  try {
    const { rows } = await pool.query("SELECT * FROM grooming_orders;");
  } catch (error) {
    console.error("query error:", err);
  }

  return rows;
}

async function getGroomingOrder(id) {
  try {
    const { rows } = await pool.query("SELECT * FROM grooming_orders WHERE id = $1", [id]);
    return rows;
  } catch (err) {
    console.error("query error:", err);
  }
}

async function insertGroomingOrder(groomingOrder) {
  try {
    await pool.query("INSERT INTO grooming_orders (dog,grooming_request,added) VALUES ($1,$2,$3)", [groomingOrder.dog_name, groomingOrder.grooming_requests, groomingOrder.added]);
  } catch (error) {
    console.error("query error:", err);
  }
}

async function deleteGroomingOrder(id) {
  try {
    await pool.query("DELETE FROM grooming_orders WHERE dog LIKE $1", [`%${dog}%;`]);
  } catch (error) {
    console.error("query error:", err);
  }
}

module.exports = {
  getGroomingOrders,
  getGroomingOrder,
  insertGroomingOrder,
  deleteGroomingOrder,
};
