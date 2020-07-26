// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");
const fs = require("fs")
const data = require("../public/assets/db.json")



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    fileToRead = fs.readFileSync(data, req.body)
    res.json(fileToRead);
  });

  

  app.post("/api/notes", function(req, res) {
    newfile = fs.appendFile(data,req.body)
    res.json(newfile);
  });

  

  app.delete("/api/notes/:id", function(req, res) {
    fileToRead = fs.readFileSync(data, req.body)
    index = req.params.id
    newfile = fileToRead.splice(index, 1)
    fs.writeFile(data, newfile)
    res.json(data);
  });
};
