const express=require('express');
const app=express();
const cors=require("cors");
const bookroute=require("./routes/bookroutes")
require("./connection/conn");
app.use(cors());
app.use(express.json())
app.use('/api/v1',bookroute);

app.listen(3000,()=>{
    console.log('server running on port 3000')
})