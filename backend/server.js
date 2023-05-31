const express = require('express');

const cors = require("cors");

const app = express();

const docuRoute = require("./routes/api/docuDetails");
const ProfDet = require("./routes/api/profDetails");
const stuDet = require("./routes/api/stuDetails");


app.use(cors({
    origin: "http://localhost:8080"
}));

app.use(express.json({extended:false}));
app.use('/docuDetails', docuRoute);

app.use('/profDetails', ProfDet);

app.use('/stuDetails', stuDet);

app.get('/',(req,res)=> {
    res.send(`API Running!!!`);
});

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Server Started on PORT ${PORT}`));