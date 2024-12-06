const express=require('express');
const app=express();
const path=require('path')
const port=3002

app.use(express.static('public'))
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public/images/dp.jpg'));
})

app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'public/images/dp.jpg'));
    })





app.listen(port,()=>{
    console.log(`app is listening prt : ${port}`)
})