const express = require('express')
const app=express()

app.get('/', (req, res) => {
	console.log('Snart lunch')
	res.send('hello world')

})

app.get('/om-mig', (req, res) => {
	console.log('Om mej')
	res.send('Om mej')

})

app.get('/kontakt', (req, res) => {
	console.log('Kontakt')
	res.send('Ni mår mej på maria.dahlquist@svenskaspel.se')

})
app.listen(3006,  (req, res) =>  {

	console.log ('App acting on port 3000. Visit localhost:3000 in chrome')

})