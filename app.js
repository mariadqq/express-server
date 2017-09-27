const express = require('express')
const path = require('path')
const app=express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	console.log('Snart lunch')
	res.render('fruit',  { fruit: 'mango' })
	//res.send('hello world')

})

app.get('/om-mig', (req, res) => {
	console.log('Om mej')
	res.send('Om mej')

})
app.get('/ananas', (req, res) => {
	console.log('ananas')
	res.render('fruit',  { fruit: 'ananas' })

})
app.get('/kontakt', (req, res) => {
	console.log('Kontakt')
	res.send('Ni mår mej på maria.dahlquist@svenskaspel.se')

})
app.listen(3018,  (req, res) =>  {

	console.log ('App acting on port 3000. Visit localhost:3000 in chrome')

})