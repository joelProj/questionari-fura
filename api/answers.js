const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req);
    res.status(200).json({
        message: "get to answers"
    });
});

router.post('/', (req, res, next) => {
    console.log("REQ: ", req);
    console.log("BODY: ", req.body.hasOwnProperty('fname'));
    res.status(200).json({
        message: "post to answers"
    });
});

module.exports = router;