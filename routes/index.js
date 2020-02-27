const express = require('express'),
    router = express.Router();



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