var express=require('express')

var app=express()
var port=3000;

app.get('/about',(req,res)=>{
    req.send('<h2>About page</h2>')
})
app.get('/users/:name',(req,res)=>{
    var userName=req.params.name;
    req.send('Hello,${UserName}!')
})
app.listen(port,()=>{
    console.log('server running')
})