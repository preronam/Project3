const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./server/database');
const MongoStore = require('connect-mongo')(session)
const passport = require('./server/passport');
const Quagga = require('quagga').default; // Common JS (important: default)


const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//Route Requires//
const user = require('./server/routes/user')

// Define middleware here
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())


// Sessions//
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport 
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }



// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
