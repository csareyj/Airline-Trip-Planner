const db = require('../config/connection');
const { User, Flights } = require('../models');

const userData = require('./userData.json');
const flightinfoData = require('./flightinfoData.json')

db.once('open', async () => {
  
  await User.deleteMany({});
  await Flights.deleteMany({});

  const users = await User.insertMany(userData);
  const flights = await Flight.insertMany(depData);
  

  console.log('All data seeded!');
  process.exit(0);
});
