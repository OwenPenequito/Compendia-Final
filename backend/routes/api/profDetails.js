var express = require('express');

var router = express.Router();

const jwt = require('jsonwebtoken');

var dbConn = require('../../config/db');

router.post('/signup', (req,res,next) =>{
    var prof_ID = req.body.prof_ID;
    var Name = req.body.Name;
    var Prog = req.body.Prog;
    var Email = req.body.Email;
    var Password = req.body.Password;
    var userId = '';

    try {
        sqlQuery = `INSERT INTO professor_details(prof_ID, Name, Prog, Email, Password)VALUES("${prof_ID}", "${Name}", "${Prog}", "${Email}", "${Password}")`;
        dbConn.query(sqlQuery,function(error, results){
            console.log(results.insertId);
            userId = results.insertId;
            res.status(200).json({success: true, userId:userId});

        });
    } catch (error) {
        console.log(error);
        return next(error);

    }

    
});

router.post('/login', (req,res,next) =>{
    var Email = req.body.Email;
    var Password = req.body.Password;

    try {
        sqlQuery = `SELECT * FROM professor_details WHERE Email="${Email}"AND Password="${Password}"`;
        dbConn.query(sqlQuery,function(error, results){
            console.log(results);
            Object.keys(results).forEach(function (key) {
                var row = results[key]

                var Name = row.Name;
                var Email = row.Email;

                var data = {
                    Name: row.Name,
                    Email: row.Email
                };

                //Create Token
            token = jwt.sign(
                 {data: data}, 
                  'secretcodehere',
                  {expiresIn: '1h'}
            );


                res.status(200).json({success: true, token:token, userId:row.prof_ID});
            });
        });
    } catch (error) {
        console.log(error);
        return next(error);

    }

    
});

router.put('/update/:userId', (req, res, next) => {
    var userId = req.params.userId;
    var Name = req.body.Name;
    var Prog = req.body.Prog;
    var Email = req.body.Email;
    var Password = req.body.Password;
    var Gender = req.body.Gender;
    var Telnum = req.body.Telnum;
    var Email_Recov = req.body.Email_Recov;
  
    try {
      sqlQuery = `UPDATE professor_details SET Name="${Name}", Prog="${Prog}", Email="${Email}", Password="${Password}", Gender="${Gender}",
      Telnum="${Telnum}", Email_Recov="${Email_Recov}" WHERE prof_ID="${userId}"`;
      dbConn.query(sqlQuery, function (error, results) {
        if (error) {
          console.log(error);
          return next(error);
        }
        
        if (results.affectedRows > 0) {
          res.status(200).json({ success: true, message: 'User updated successfully' });
        } else {
          res.status(404).json({ success: false, message: 'User not found' });
        }
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  });

module.exports = router;
