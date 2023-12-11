const express = require('express');
const app = express();
const PORT = 4000;


let people = [
    {id:1, name:'parth'}
];

app.get("/people",(req,res)=>{
    res.status(200).json(people);
})
// listen to the external requests on this port.
app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})