const db = require('../config/connection');
const { User, Departure, Destination, Duration, Price } = require('../models');

const userData = require('./userData.json');
const depData = require('./depData.json');
const destData = require('./destData.json');
const durData = require('./durData.json');
const priceData = require('./priceData.json');

db.once('open', async () => {
  
  await User.deleteMany({});
  await Departure.deleteMany({});
  await Destination.deleteMany({});
  await Price.deleteMany({});
  await Duration.deleteMany({});

  const users = await User.insertMany(userData);
  const departure = await Departure.insertMany(depData);
  const destination = await Destination.insertMany(destData);
  const price = await Price.insertMany(priceData);
  const duration = await Duration.insertMany(durData);

  console.log('All data seeded!');
  process.exit(0);
});
