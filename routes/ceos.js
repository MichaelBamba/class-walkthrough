const express = require('express'),
    router = express.Router()
ceoModel = require(`../models/ceoModel`);



router.get('/', async (Req, res) => {
    const executiveData = await ceoModel.getAll();
    console.log(`executive data`, executiveData)
    res
        .render('template', {
            locals: {
                title: 'APLE CEOs',
                arrayOfData: executiveData
            },
            partials: {
                partial: 'partial-ceos'
            }
        });
});
module.exports = router;