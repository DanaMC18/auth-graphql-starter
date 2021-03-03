const graphql = require('graphql');
const UserType = require('./types/user_type');
const { login, signup } = require('../services/auth');

const { GraphQLObjectType, GraphQLString } = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      // req = request AKA context
      resolve(parentValue, args, req) {
        const { email, password } = args;
        return signup({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
