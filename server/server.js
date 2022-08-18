const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { User, Departure, Destination, Price, Duration } = require('./models');

const userData = require('./seeds/userData.json');
const depData = require('./seeds/depData.json');
const destData = require('./seeds/destData.json');
const durData = require('./seeds/durData.json');
const priceData = require('./seeds/priceData.json');

const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.get('/seedDatabase', async (req, res) => {
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
      res.json(users, departure, destination, duration, price);
    });


    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
