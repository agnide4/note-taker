// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");
const fs = require("fs")
const data = require("./db/db.json")



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    fs.readFileSync("./db/db.json", function (fileToRead) {
    res.json(fileToRead);
    })

  });

  

  app.post("/api/notes", function(req, res) {
    fs.readFileSync("./db/db.json", "utf8", function(fileToRead){
      fileToRead.push(req.body)
      fs.writeFileSync("./db/db.json",fileToRead)
    })
    
    res.json(data);
  });

  

  app.delete("/api/notes/:id", function(req, res) {
    fileToRead = fs.readFileSync("./db/db.json", "utf8")
    let index = req.params.id
    newfile = fileToRead.splice(index, 1)
    fs.writeFile("./db/db.json", newfile)
    res.json(data);
  });
};
