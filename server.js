const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

const isDev = app.get('env') === 'development';

app.set('views', __dirname + '/views');
app.set('view engine', 'nunjucks');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use('/assets', express.static('node_modules/bootstrap/dist/'))

app.get('/', (req, res) => {
    res.render('pages/full-version');
});
 

app.get('/home-page-no-content', (req, res) => {
    res.render('pages/home-page-no-content');
});

app.get('/home-page-includes', (req, res) => {
    res.render('pages/home-page-includes');
});

app.listen(3000);

console.log('App started on http://localhost:3000');