var express = require('express');

var router = express.Router();

const jwt = require('jsonwebtoken');

var dbConn = require('../../config/db');

router.post('/signup', (req,res,next) =>{
    var stu_ID = req.body.stu_ID;
    var stu_Name = req.body.stu_Name;
    var stu_program = req.body.stu_program;
    var stu_email = req.body.stu_email;
    var password = req.body.password;
    var userId = '';

    try {
        sqlQuery = `INSERT INTO stu_details(stu_ID, stu_Name, stu_program, stu_Email, password)VALUES("${stu_ID}", "${stu_Name}", "${stu_program}", "${stu_email}", "${password}")`;
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
    var stu_email = req.body.stu_email;
    var password = req.body.password;

    try {
        sqlQuery = `SELECT * FROM stu_details WHERE stu_email="${stu_email}"AND Password="${password}"`;
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


                res.status(200).json({success: true, token:token, userId:row.stu_ID});
            });
        });
    } catch (error) {
        console.log(error);
        return next(error);

    }

    
});

//Update Settings
// ...

router.put('/update/:userId', (req, res, next) => {
    var userId = req.params.userId;
    var stu_Name = req.body.stu_Name;
    var stu_program = req.body.stu_program;
    var stu_email = req.body.stu_email;
    var password = req.body.password;
    var gender = req.body.gender;
    var Telnum = req.body.Telnum;
    var email_Recov = req.body.email_Recov;
  
    try {
      sqlQuery = `UPDATE stu_details SET stu_Name="${stu_Name}", stu_program="${stu_program}", stu_Email="${stu_email}", password="${password}", gender="${gender}",
      Telnum="${Telnum}", email_Recov="${email_Recov}" WHERE stu_ID="${userId}"`;
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
