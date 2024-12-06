const express=require('express');
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("Product page");
})
router.post("/",(req,res)=>{
    res.send("Product created");
})
router.put("/",(req,res)=>{
    res.send("Product updated");
})
router.delete("/",(req,res)=>{
    res.send("Product deleted");
})

module.exports=router;