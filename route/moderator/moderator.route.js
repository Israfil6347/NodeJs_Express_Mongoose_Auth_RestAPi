const router = require("express").Router();

router.get("/", (req,res)=>{
    return res.status(200).send({
            status: true,
            message: "this is moderator route"
        });
});


module.exports = router;