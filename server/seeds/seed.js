const db = require('../config/connection');
const { User, FlightInfo } = require('../models');

const flightInfoData = require('./flightInfoData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await FlightInfo.deleteMany({});
  await User.deleteMany({});

  const flights = await FlightInfo.insertMany(flightInfoData);
  const users = await User.insertMany(userData);

  console.log('All data seeded!');
  process.exit(0);
});
