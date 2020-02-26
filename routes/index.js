const express = require('express'),
    router = express.Router();

// const rootController = (Req, res) => {
//     const snippet = '<h1>Hello world</h1>';
//     res
//         .status(200)
//         .send(snippet)
//         .end();
// };

router.get('/', (Req, res) => {
    const snippet = '<h1>Hello world</h1>';
    res
        .status(200)
        .send(snippet)
        .end();
});
module.exports = router;