
let express = require('express'), app = express(), path = require('path');


app.use(require('cors')());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', require('./controllers/api'));
app.use('/files', require('./controllers/file'));


app.listen(8080, console.log('http://localhost:8080'))