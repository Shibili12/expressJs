const express=require('express');
const app=express();
const port=3000
const productRouter=require('./routes/Product')
const userRouter=require('./routes/User')

app.use('/product',productRouter);
app.use('/user',userRouter);


app.listen(port,()=>{
    console.log(`app is listening prt : ${port}`)
})