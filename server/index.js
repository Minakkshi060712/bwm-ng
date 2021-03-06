const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental');
const rentalRoutes= require('./routes/rentals');


mongoose.connect(config.DB_URI).then(() =>
	{
      const fakeDb = new FakeDb();
      fakeDb.seedDb();

	});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);
/*
app.get('/rentals',function(req,res){

	res.json({'success': true});
});
*/
const PORT = process.env.PORT || 3000;

app.listen(3000,function(){
	console.log("app is running");
})