require('dotenv').config();
const express=require('express');

const app=express();

const PORT=process.env.PORT;
app.listen(PORT,(err)=>{

err?console.error(`Server not connected ${err.message}`):console.log(`server connected at PORT : ${PORT}`);
})