const express = require('express'),
    router = express.Router();



router.get('/', (Req, res) => {
    const snippet = '<h1>woof</h1>';
    res
        .status(200)
        .send(snippet)
        .end();
});
module.exports = router;