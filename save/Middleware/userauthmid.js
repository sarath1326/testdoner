

const JWT = require("jsonwebtoken")
require("dotenv").config()

module.exports = {


    user_auth_verify: (req, res, next) => {

        const token = req.cookies.donor_sync_user

        if (!token) {

            console.log("no token")
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