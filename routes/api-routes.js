// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");
const fs = require("fs")
const data = require("../db/db.json")
const path = require("path");


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
    let pnotes = fs.readFileSync("./db/db.json", "utf8")
    res.json(JSON.parse(pnotes));
    })


  app.post("/api/notes", function(req, res) {
    let pnotes = (JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
    pnotes.push(req.body)
    let upNote = (JSON.stringify(pnotes))
    fs.writeFileSync("./db/db.json",upNote)  
    res.json(JSON.parse(upNote));
    });
  
    
  
  app.delete("/api/notes/:id", function(req, res) {
    let pnotes = (JSON.parse(fs.readFileSync("./db/db.json", "utf8")))
    console.log(pnotes)
    let index = req.params.id
    console.log(index)
    newfile = pnotes.splice(index, 1)
    
    upfile = JSON.stringify(newfile)
    fs.writeFileSync("./db/db.json",upfile)
    res.json(JSON.parse(upfile)); 
 
    });
  
  
  };

  

 