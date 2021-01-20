import { gql, makeExecutableSchema } from "apollo-server-express";
import { agentsResolvers } from "./domains/agents/agentsResolvers";
import { agentsTypeDefs } from "./domains/agents/agentsTypeDefs";
import { shiftsResolvers } from "./domains/shifts/shiftsResolvers";
import { shiftsTypeDefs } from "./domains/shifts/shiftsTypeDefs";

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty(emptyInput: String): String
  }
`;

const typeDefs = [rootTypeDefs, agentsTypeDefs, shiftsTypeDefs];
const resolvers = [agentsResolvers, shiftsResolvers];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
