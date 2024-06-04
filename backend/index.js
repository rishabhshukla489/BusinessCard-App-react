const {createBusinessCard} =require("./types")
const express=require('express');
const {businesscard}= require("./db")
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

app.post("/businesscard",async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload =createBusinessCard.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wring inputs",
        })
        return; 
    }
    await businesscard.create({
        name: createPayload.name,
        description: createPayload.description,
        interests: createPayload.interests,
        linkedin: createPayload.linkedin,
        twitter: createPayload.twitter
    })
    res.json({
        msg:" Business card created"
    })
})

app.get("/businesscards",async(req,res)=>{
     const businesscards=await businesscard.find({});
    res.json({
        businesscards
    })

})

// app.put("/updated",async(req,res)=>{
//     const donePayload=req.body;
//     const parsedPayload =updateBusinessCard.safeParse(donePayload);
//     if(!parsedPayload.success){
//         res.status(411).json({
//             msg: "You sent the wring inputs",
//         })
//         return; 
//     }
//     await businesscard.updateOne({
//         _id: req.body.id
//     },{
//         completed:true
//     })
//     res.json({
//         msg:"todo marked as completd"
//     })

// })

app.listen(3000);