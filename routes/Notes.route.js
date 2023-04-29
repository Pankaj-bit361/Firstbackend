
const express=require("express")
const { NoteModel } = require("../models/notemodel")

const NoteRouter=express.Router()


NoteRouter.post("/add",async(req,res)=>{

    try {
        let user=new NoteModel(req.body)
        await user.save()
        res.send({"msg":"Notes added"})
    } catch (error) {
        res.send({"msg":error.message,"line":"28"})
    }

})



NoteRouter.get("/",async(req,res)=>{
    const {author}=req.body
try {
    let users= await NoteModel.find({author})
    res.send(users)
} catch (error) {
    res.send({"err":error.message})
}

})

module.exports={
    NoteRouter
}