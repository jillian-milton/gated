require('dotenv').config()
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;



// configure pg
const pg = require('pg')
const client = new pg.Client({
    connectionString: process.env.CONNECTION_STRING
})

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    noCache: process.env.NODE_ENV !== 'production',
    express: app
});

client.connect()

// Static Files
app.use(express.static('static'))

app.get('/', (req, res) => {

    res.render('index.njk');

})


app.get('/signup', (req, res) => {

    res.render('signup.njk');

})

app.get('/onboarding', async (req, res) => {

    let results = []
    
    results = await client.query("SELECT distinct name,FROM majors, WHERE name NOT LIKE '%Minor%', ORDER BY name")
    
    
    res.render('onboarding.njk', {rows: results.rows});

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