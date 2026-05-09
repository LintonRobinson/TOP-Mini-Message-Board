const { Client } = require("pg");
const SQL = `CREATE TABLE IF NOT EXISTS grooming_orders (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
dog TEXT, 
grooming_request TEXT, 
added TIMESTAMP
);

INSERT INTO grooming_orders (dog, grooming_request, added) VALUES
('Niloo', 'Please do nails, and bath, and ears.', '2026-05-08 17:00:00-05:00');

INSERT INTO grooming_orders (dog, grooming_request, added) VALUES
('Roya','Please clean ears and give a treat.','2026-05-08 17:20:00-05:00');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done seeding");
}

main();
