const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exhdb = require('express-handlebars');
const app = express();



// Init Middleware
// app.use(logger);

//Handles Middleware
app.engine('handlebars', exhdb({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Homepage Route
app.get('/', (req, res) => {
    res.render('index');
})

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/users', require('./routes/api/users'));

//set static folder
app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public' , 'index.html'));
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
 