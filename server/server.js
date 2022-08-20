const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { User, Flights } = require('./models');

const userData = require('./seeds/userData.json');
const flightsData = require('./seeds/flightInfoData.json');

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
      await Flights.deleteMany({});

      const users = await User.insertMany(userData);
      const flights = await Flights.insertMany(flightsData);
    
      console.log('All data seeded!');
      res.json(users, flights);
    });


    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
