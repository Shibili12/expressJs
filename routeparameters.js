const express=require('express');
const app=express();
const port=3001

app.get("/product",(req,res)=>{
    res.send("All Products");
})

app.get("/product/:category",(req,res)=>{
    const {category}=req.params
    if(category=="mobiles"){
        res.send("Mobiles"); 
    }else if(category=="laptop"){
        res.send("Laptops");
    }else{
        res.send("Other Products");
    }
})

app.get("/flights/:from-:to",(req,res)=>{ 
    res.send(`Flights from ${req.params.from} to ${req.params.to}`);
})

app.get("/place/:state.:district",(req,res)=>{ 
    res.send(`state ${req.params.state} district ${req.params.district}`);
})



app.listen(port,()=>{
    console.log(`app is listening prt : ${port}`)
})
