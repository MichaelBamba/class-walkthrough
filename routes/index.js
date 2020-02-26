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
        .render('template', {
            locals: {
                title: 'hello world'
            },
            partials: {
                partial: 'partial-index'
            }
        })
});
module.exports = router;