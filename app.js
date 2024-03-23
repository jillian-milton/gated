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

    let country = []
    
    country = await client.query("select name from countries")

    let state = []
    
    state = await client.query("select abbr from states")


    let dorm = []
    
    dorm = await client.query("select name from dorms")


    res.render('onboarding.njk', {
        rows: major.rows, 
        row: minor.rows, 
        col: concentration.rows,
        origin: country.rows,
        room: dorm.rows,
        us: state.rows,
    });

})

app.get('/onboarding2', async (req, res) => {

    let coursenum = []
    coursenum = await client.query("SELECT distinct subject, course_number FROM courses ORDER BY subject, course_number")

    let prof = []
    prof = await client.query("SELECT distinct instructor FROM courses ORDER BY instructor")

    
    res.render('onboarding2.njk', {
        numbers: coursenum.rows,  
        col: prof.rows,
    });

})


app.get('/survey', (req, res) => {

    res.render('survey.njk');

})


app.get('/rating', (req, res) => {

    res.render('rating.njk');

})

app.get('/full', (req, res) => {

    res.render('full.njk');

})

app.get('/home', (req, res) => {

    res.render('home.njk');

})

app.get('/searchpeople', async (req, res) => {

    let major = []
    
    major = await client.query("SELECT distinct name FROM majors WHERE name NOT LIKE '%Minor%' ORDER BY name")

    let coursenum = []
    coursenum = await client.query("SELECT distinct subject, course_number FROM courses ORDER BY subject, course_number")

    let country = []
    
    country = await client.query("select name from countries")

    let state = []
    
    state = await client.query("select abbr from states")


    let dorm = []
    
    dorm = await client.query("select name from dorms")

    let club = []
    
    club = await client.query("select name from clubs")

    let sport = []
    
    sport = await client.query("select name from sports")

    let frat = []
    
    frat = await client.query("select name from frats")


    res.render('searchpeople.njk', {
        rows: major.rows, 
        numbers: coursenum.rows, 
        origin: country.rows,
        room: dorm.rows,
        madness: sport.rows,
        moon: club.rows,
        greek: frat.rows,
        us: state.rows,
    });

})


app.get('/searchcourses', async (req, res) => {


    let coursenum = []
    coursenum = await client.query("SELECT distinct subject, course_number FROM courses ORDER BY subject, course_number")
   
    let prof = []
    prof = await client.query("SELECT distinct instructor FROM courses ORDER BY instructor")

    
    res.render('searchcourses.njk', {
        numbers: coursenum.rows,
        col: prof.rows
    });

})

app.get('/resultspeople', (req, res) => {

    res.render('resultspeople.njk');

})

app.get('/friendprofile', (req, res) => {

    res.render('friendprofile.njk');

})

app.get('/text', (req, res) => {

    res.render('text.njk');

})


app.get('/groupchat', (req, res) => {

    res.render('groupchat.njk');

})

app.get('/participants', (req, res) => {

    res.render('participants.njk');

})


app.get('/mycourses', (req, res) => {

    res.render('mycourses.njk');

})

app.get('/chats', (req, res) => {

    res.render('chats.njk');

})

app.get('/recognize', (req, res) => {

    res.render('recognize.njk');

})

app.get('/profile', (req, res) => {

    res.render('profile.njk');

})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})