const express = require("express");
const app = express();

const port = 5000;

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
app.get('/tone',(req,res) => {
    res.send("Grande Tone")
})
app.get('/nersu',(req,res) => {
    res.send("Grande Nersu")
})
app.get('/default',(req,res) => {
    res.send("Grande Default")
})
app.get('/exa',(req,res) => {
    res.send("Grande BIT")
})