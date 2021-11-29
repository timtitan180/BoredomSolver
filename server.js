const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'client','build')));
// app.use(logger('dev'));


app.get('/getApi',(req,res)=>{
    res.json({ message: "Hello from server!" });
}) ;

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../boredomsolver/build', 'index.html'));
  });

app.listen(port,(err)=>{
    try {
        console.log(`Server running on port ${port}`);
    }

    catch(err) {
        console.log(err);
    }
});