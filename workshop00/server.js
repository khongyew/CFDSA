const express = require('express')
const app = express()
const handleF = require('express-handlebars')
const port = process.env.PORT || 3000
const { fortune } = require('./lib/library')

app.engine('handlebars', handleF.engine(
    {defaultLayout: 'main'}
))

app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/images'));

app.get('', (req, res) => {
    res.redirect('/index')
})

app.get('/index', (req, res) => res.render('index', {fortune}))

app.get('/about', (req, res) => res.render('about'))

app.get('/fortune', (req, res) => res.render(
    'fortune', { fortune }
    ))

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, console.log(`Server is on port ${port}`))