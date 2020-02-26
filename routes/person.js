const express = require('express'),
    router = express.Router();

const data = [
    { name: 'zubat', type: 'Flying' },
    { name: 'pikachu', type: 'electric' }
];

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'POkemon',
            arrayOfData: data
        },
        partials: {
            partial: 'partial-person'
        }
    })
});

module.exports = router;