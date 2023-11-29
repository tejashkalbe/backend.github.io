const express= require('express');
const router=express.Router()
const datacontroller= require('./controllers')

router.post('/',datacontroller.postVaribles)
router.get('/',datacontroller.getallData)
module.exports=router