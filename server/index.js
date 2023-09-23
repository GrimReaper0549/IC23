const express = require('express');
const app = express();
const morgan  = require('morgan');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const PORT = process.env.PORT || 5000;
const {registerInfinity} = require('./database/data');
require('dotenv').config();


app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(upload.array());


app.get('/',(req,res)=>{
    res.json({status:true,message:"connection established"});
});

app.post('/infinity/register',async (req,res)=>{
    console.log(req.body);
    let msg = await registerInfinity(req.body);

    res.send(msg);
    
     
}); 



app.listen(PORT,()=>{
console.log(`Listening to port ${PORT}....`);
}); 