
let express = require('express'), app = express(), path = require('path');


app.use(express.urlencoded({extended:true}));
app.use('/api', require('./controllers/api'));
app.use('/api/files', require('./controllers/file'));


app.listen(8080, console.log('http://localhost:8080'))