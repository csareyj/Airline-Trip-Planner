const db = require('../config/connection');
const { User, FlightInfo } = require('../models');

const flightInfoData = require('./flightInfoData.json');
const userData = require('./userData.json');
const depData = require('./depData.json');
const destData = require('./destData.json');
const durData = require('./durData.json');
const priceData = require('./priceData.json');

db.once('open', async () => {
  await FlightInfo.deleteMany({});
  await User.deleteMany({});

  const flights = await FlightInfo.insertMany(flightInfoData);
  const users = await User.insertMany(userData);
  // const departure
  // const destination
  // const price
  // const duration

  console.log('All data seeded!');
  process.exit(0);
});
