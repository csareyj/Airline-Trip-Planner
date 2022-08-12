const db = require('../config/connection');
const { User, Tech } = require('../models');

const techData = require('./techData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await Tech.deleteMany({});
  await User.deleteMany({});

  const technologies = await Tech.insertMany(techData);
  const users = await User.insertMany(userData);

  console.log('All data seeded!');
  process.exit(0);
});
