

const moongoose=require("mongoose");
require('dotenv').config()




module.exports.DBConnect=()=>{

    moongoose.connect("mongodb+srv://clumsycoders4u:clumsycoders1937@cluster0.tp8adtz.mongodb.net/?retryWrites=true&w=majority").then(()=>{

          console.log("DB connected")
    
      
      }).catch(err=>{

         
            console.log("DB connecting failed",err)
   
      })

       
}




