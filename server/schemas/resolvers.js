const { User, FlightInfo, Matchup } = require('../models');
const { ObjectId } = require("mongoose").Types;
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    FlightInfo: async () => {
      return FlightInfo.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },

    users: async () => {
      return User.find({});
    },

    user: async (parent, { _id }) => {
      return User.findOne({_id: ObjectId(_id)});
    }
      
  },

  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
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
