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

    let major = []
    
    major = await client.query("SELECT distinct name FROM majors WHERE name NOT LIKE '%Minor%' ORDER BY name")
    
    let minor = []
    
    minor = await client.query("SELECT distinct name FROM majors WHERE name LIKE '%Minor%' ORDER BY name")

    let concentration = []
    
    concentration = await client.query("SELECT concentration from majors WHERE concentration NOT LIKE '%null%' ORDER BY concentration")
    


    res.render('onboarding.njk', {rows: major.rows, row: minor.rows, col: concentration.rows});

})

app.get('/onboarding2', async (req, res) => {


    let dept = []
    dept = await client.query("SELECT distinct subject FROM courses ORDER BY subject")

    let number = []
    number = await client.query("SELECT distinct course_number FROM courses ORDER BY course_number")

    let prof = []
    prof = await client.query("SELECT distinct instructor FROM courses ORDER BY instructor")

    
    res.render('onboarding2.njk', {rows: dept.rows, nums: number.rows, col: prof.rows});

})

app.get('/home', (req, res) => {

    res.render('home.njk');

})


app.get('/searchcourses', async (req, res) => {


    let dept = []
    dept = await client.query("SELECT distinct subject FROM courses ORDER BY subject")

    let number = []
    number = await client.query("SELECT distinct course_number FROM courses ORDER BY course_number")

    let prof = []
    prof = await client.query("SELECT distinct instructor FROM courses ORDER BY instructor")

    
    res.render('searchcourses.njk', {rows: dept.rows, nums: number.rows, col: prof.rows});

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})