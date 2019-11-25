const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
		res.send('Coming Soon..');
});

app.get('/custom', (req, res))=> {
	res.set('X-FEFS','fullstack');
	res.status(418);
	res.send('Teapot status code');

app.listen(port, ()=> console.log(`App now listening on port ${port}!`));
