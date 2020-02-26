const express = require('express'),
    router = express.Router();



router.get('/:byear?', (req, res) => {
    const { byear } = req.params;
    const age = (2020 - byear);
    console.log(`url parameters are:`, req.params);
    res
        .status(200)
        .send(`<h1>your age is ${age}</h1 > `)
        .end();
});

module.exports = router;