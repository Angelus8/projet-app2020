const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const createError = require('http-errors');
const mongoose = require('mongoose');

const app = express();
const port = 8916;

//database connect
mongoose.connect('mongodb://127.0.0.1:27017/app',{useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;
db.on('error',()=>{
  console.log("Erreur de connection à la base de donnée")
});
db.once('open',()=>{
  console.log("Base de donnee connectee avec succes");
});
//


//routes
const HomePage = require('./routes/Home');
const {Home,Detail} = require('./routes/Hotel')
const { Index, Liste, Debar, Saak, Croi, Pasta } = require('./routes/Restaurant')
const IndexTicket = require('./routes/Ticket')
const HomePlace = require('./routes/Place');
const homeVip = require('./routes/placeVip');
const homePre = require('./routes/placePrem');
const HomeStand = require('./routes/viewStand');
const HomeVip = require('./routes/viewVip');
const HomePrem = require('./routes/viewPremium');
const HomeQr = require('./routes/Qr');
//
app.set('port', process.env.port || port)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'publics')));


//mes pages
app.use('/Code_Qr',HomeQr);
app.use('/', HomePage);
app.use('/Hotel',Home);
app.use('/Details',Detail);
app.use('/Restaurant',Index);
app.use('/Liste',Liste);
app.use('/Debarcadere',Debar);
app.use('/Saakan',Saak);
app.use('/Croisette',Croi);
app.use('/Pasta',Pasta);
app.use('/Ticket',IndexTicket);
app.use('/Tribune_Standard',HomePlace);
app.use('/Tribune_Vip',homeVip);
app.use('/Tribune_Pre',homePre);
app.use('/Ticket_Standard',HomeStand);
app.use('/Ticket_Vip',HomeVip);
app.use('/Ticket_Premium',HomePrem);

//
app.use(function (req,res,next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Serveur 🌏 est ouvert sur le port :`,port);
});