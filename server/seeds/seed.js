const db = require('../config/connection');
const { User, Flights } = require('../models');

const userData = require('./userData.json');

const flightsData = require('./flightsInfoData.json');

db.once('open', async () => {
  
  await User.deleteMany({});
  await Flights.deleteMany({});

  const users = await User.insertMany(userData);
  const flights = await Flights.insertMany(flightsData);

  console.log('All data seeded!');
  process.exit(0);
});
