const express = require('express')
//from express we'll use the router
const router = express.Router()
 
router.get('/',(req,res)=>{
    res.send('Hiiiii Boooo')
})
router.post('/signup',(req,res)=>{
     console.log(req.body.name)
})
module.exports= router;