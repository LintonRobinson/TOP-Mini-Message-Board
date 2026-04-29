const express = require("express");
const app = express();
const path = require("node:path");

// Router Imports
const indexRouter = require("./routes/indexRouter.js");

// Static Asset Configuration
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// SSR View / View Ingine  Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Server Port
const PORT = 3000;

//

app.use("/", indexRouter);

app.listen(PORT, () => console.log("Running!"));
