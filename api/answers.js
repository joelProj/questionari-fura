const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req);
    res.status(200).json({
        message: "get to answers"
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    //console.log("REQ: ", req);
    res.status(200).json({
        message: "post to answers"
    });
});

module.exports = router;
