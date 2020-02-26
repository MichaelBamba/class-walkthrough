const express = require('express'),
    router = express.Router();



router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'TNT SET!!!'
        },
        partials: {
            partial: 'partial-explosions'
        }
    })
});
module.exports = router;