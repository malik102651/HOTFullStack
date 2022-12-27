const express = require('express');
const app = express();
const port = '3001'

app.get('/',(req,res)=>{
    res.send('Welcome Dear!')
})

app.listen(port,()=>{
    console.log(`House of Tutor app start at http://localhost:${port}`);
})