const express = require('express'),
    router = express.Router();



router.get('/:name?', (req, res) => {
    const { name } = req.params;
    console.log(`url parameters are:`, req.params);
    res
        .status(200)
        .send(`<h1>HELLO ${name}</h1>`)
        .end();
});

module.exports = router;