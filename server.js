const express = require('express');
const app = express();
const PORT = 4000;

// listen to the external requests on this port.
app.listen(PORT,()=>{
    console.log(`server has started on port ${PORT}`)
})