const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;


// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    noCache: process.env.NODE_ENV !== 'production',
    express: app
});

// Static Files
app.use(express.static('static'))

app.get('/', (req, res) => {

    res.render('index.njk');

})


app.get('/signup', (req, res) => {

    res.render('signup.njk');

})

app.get('/onboarding', (req, res) => {

    res.render('onboarding.njk');

})

app.get('/onboarding2', (req, res) => {

    res.render('onboarding2.njk');

})

app.get('/home', (req, res) => {

    res.render('home.njk');

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})