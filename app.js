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

// client.connect()

// Static Files
app.use(express.static('static'))

app.get('/', (req, res) => {

    res.render('index.njk', {title: "Gated Log In"});

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})