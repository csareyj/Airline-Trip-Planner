const { User, Departure, Destination, Duration, Price } = require('../models');
const { ObjectId } = require("mongoose").Types;
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    Departure: async () => {
      return Departure.find({});
    },
    Destination: async () => {
      return Destination.find({});
    },
    Duration: async () => {
      return Duration.find({});
    },
    Price: async () => {
      return Price.find({});
    },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },

    users: async () => {
      return User.find({});
    },

    user: async (parent, { _id }) => {
      return User.findOne({_id: ObjectId(_id)});
    }
      
  },

  Mutation: {
    createDeparture: async (parent, args) => {
      const departure = await Departure.create(args);
      return departure;
    },
    createDestination: async (parent, args) => {
      const destination = await Destination.create(args);
      return destination;
    },
    createDuration: async (parent, args) => {
      const duration = await Duration.create(args);
      return duration;
    },
    createPrice: async (parent, args) => {
      const price = await Price.create(args);
      return price;
    },
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
    createUser: async (parent, {name, email, password}) => {
      const user = await User.create({name, email, password});

      return user;
    },

login: async(parent, {email, password}) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError('No user with this email found!');
  }

  const correctPw = await user.comparePassword(password);

  if (!correctPw) {
    throw new AuthenticationError('Incorrect password!');
  }


  const token = signToken(user);
    return {token, user};

}

  },
};

module.exports = resolvers;
