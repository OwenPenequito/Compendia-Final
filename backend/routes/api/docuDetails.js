var express = require('express');

var router = express.Router();

var dbConn = require('../../config/db');

//Routes
//INSERT
router.post('/add',(req,res)=>{

    var DOI = req.body.DOI;
    var Title = req.body.Title;
    var Date = req.body.Date;
    var Author = req.body.Author;
    var Keywords = req.body.Keywords;
    var Program = req.body.Program;
    var Content = req.body.Content;

    //perform MySQL insert
    sqlQuery = `INSERT INTO doc_details(Title, Date, Author, Program, Keywords, Content, DOI)
    VALUES("${Title}", '${Date}', "${Author}","${Program}","${Keywords}", "${Content}", "${DOI}")`;

    dbConn.query(sqlQuery, function(error,results, fields){
        if(error) throw error;
    res.status(200).json(results);
    });
});

//VIEW
router.get('/view', (req, res) => {
   
  
    sqlQuery = `SELECT * FROM doc_details`;
    dbConn.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    });
});

router.get('/viewID/:ID', (req, res) => {
    const ID = req.params.ID;

    dbConn.query(`SELECT ID FROM doc_details WHERE ID = ${ID}`, function (error, results, fields) {
      if (error) throw error;
      else if (!results.length){
        console.log("Unidentified ID")
        res.status(400).json("Unidentified ID");
        return;
    } else{
        sqlQuery = `SELECT * FROM doc_details WHERE ID = ${ID}`;
        dbConn.query(sqlQuery, function (error, results, fields) {
          if (error) throw error;
          res.status(200).json(results);
        });
    }
    });
});

//Update
router.patch('/update/:id', (req, res)=>{
    console.log('API Connected');
    const id = req.params.id;

    dbConn.query(`SELECT ID FROM doc_details WHERE ID = ${id}`, function(error, results, fields){
        if(error) throw error;
        else if (!results.length){
            console.log("Unidentified ID")
            res.status(400).json("Unidentified ID");
            return;

        } else{
        var DOI = req.body.DOI;
        var Title = req.body.Title;
        var Date = req.body.Date;
        var Author = req.body.Author;
        var Keywords = req.body.Keywords;
        var Program = req.body.Program;
        var Content = req.body.Content;

            dbConn.query(`UPDATE doc_details SET DOI = "${DOI}", Title = "${Title}", Date = '${Date}', Author = "${Author}", Keywords = "${Keywords}", Program = "${Program}", Content = "${Content}" WHERE id = ${id}`, function(error, results, fields){
                console.log("Content Updated");
                if(error) return;
                res.status(200).json(results);
            
            });
        };

    });
});


//Delete
router.delete('/delete/:id', (req,res)=>{

    const id = req.params.id;

    dbConn.query(`SELECT id from doc_details WHERE id = ${id}`, function(error, results, fields){
        if(error) throw error;

        else if (!results.length){
            console.log("ID is unknown")
            res.status(300).json("ID is unknwon");
            return;

        } else {
            dbConn.query(`DELETE from doc_details WHERE id = ${id}`, function(error, results, fields){
                console.log("Data is deleted");
                if(error) return;
                res.status(300).json(results);
            });
        }
    });
});

//Search
router.get('/search/:query', (req, res) => {
    const query = req.params.query;
    dbConn.query(`SELECT * FROM doc_details WHERE Title = "${query}" OR Date = '${query}' OR Author = "${query}" OR Keywords = "${query}" OR Program = "${query}"`, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    });
  });

  // Recommendation
router.get('/recommend/:id', (req, res) => {
    const id = req.params.id;
  
    // Retrieve document details for the specified ID
    dbConn.query(`SELECT * FROM doc_details WHERE ID = ${id}`, function (error, results, fields) {
      if (error) throw error;
  
      // Extract relevant information for recommendation (e.g., keywords, author, program)
      const { Keywords, Author, Program, Date } = results[0];
  
      // Perform recommendation logic here based on the extracted information
      // You can use this information to query the database or any other recommendation algorithm
  
      // For example, let's assume we want to recommend documents with the same keywords
      dbConn.query(`SELECT * FROM doc_details WHERE Keywords = "${Keywords}" OR Author = "${Author}" OR Date = "${Date}" OR Program = "${Program}" AND ID != ${id}`, function (error, recommendations, fields) {
        if (error) throw error;
  
        res.status(200).json(recommendations);
      });
    });
  });

  //Views
  router.post('/incrementViews/:id', (req,res) => {
    const id = req.params.id;
    dbConn.query(`SELECT ID  FROM doc_details WHERE ID = ${id}`, function (error,results, fields) {
        if (error) throw error;
        else if (!results.length) {
            console.log("Unidentified ID");
            res.status(400).json("Unidentified ID");
        } else {
            dbConn.query(`UPDATE doc_details SET Views = Views + 1 where ID = ${id}`, function(error, results, fields) {
                if (error) throw error;
                console.log("View count incremented");
                res.status(200).json(results);
            });
        }
    });
  });
  
  
module.exports = router;
