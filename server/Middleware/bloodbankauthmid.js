



const JWT = require("jsonwebtoken")
require("dotenv").config()




module.exports={



       blood_bank_auth_verifi:(req,res,next)=>{

        const token = req.cookies.donor_sync_blood_bank
        
        console.log(token)

        if (!token) {

            console.log("no1 token")
            
            res.json({ authfailed: true })
           
            return

        } else {

            JWT.verify(token, "clumsy1937", (err, resilt) => {

                if (resilt) {

                    next()

                } else {

                    console.log("no token")

                    res.json({ authfailed: true })

                    return

                }
            })


        }


             
       }
}