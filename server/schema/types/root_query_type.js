const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // current user
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
