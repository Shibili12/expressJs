const express=require('express');
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("User page");
})
router.post("/",(req,res)=>{
    res.send("User created");
})
router.put("/",(req,res)=>{
    res.send("User updated");
})
router.delete("/",(req,res)=>{
    res.send("User deleted");
})

module.exports=router;