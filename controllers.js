const timestamp2 = require('./Modal')


// create api endpoint to receive and store data
const postVaribles = async(req,res) =>{
  const {timestamp,variables} = req.body;
  let variable;
  try{
    variable = await timestamp2({

      timestamp,
      variables
    }
    )
    variable = await variable.save();
  }
  catch(err){
    console.log(err)
  }
  if(!variable){
    return res.status(404).json({message:"Error saving"})
  }else{
    return res.status(200).json({variable})
  }
}

// creat api endpoint to get data

const getallData=async(req,res)=>{
  let variable;
  try{
    variable=await timestamp2.find(); // retrieve the data 10 records
  }catch(err){
    console.log(err)
  }
  if(!variable){
    res.status(404).json({message:"Error getting"})
  }else{
    res.status(200).json({variable})
  }
}

exports.postVaribles=postVaribles;
exports.getallData=getallData;
