// Dependencies
// =============================================================
const express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  