const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set(`view engine`, `html`);

app.listen(3333, () => {
    console.log('server running on port 3333');
});

// app.guse('/', (request, response) => {
//     const snippuse = '<h1>happybirthday alan and belated josh</h1>'
//     response
//         .status(200)
//         .send(snippuse)
//         .end();

// });

const rootController = require(`./routes/index`);
const catController = require(`./routes/cat`);
const dogController = require(`./routes/dog`);
const personController = require('./routes/person')
const greetController = require(`./routes/greet`)
const ageController = require(`./routes/age`)


app.use('/greet', greetController)
app.use('/person', personController)
app.use('/', rootController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use(`/age`, ageController)


