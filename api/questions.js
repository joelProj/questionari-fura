const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "get to questions"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "post to questions"
    });
});

module.exports = router;