import { gql } from "apollo-server-express";

export const agentsTypeDefs = gql`
  enum JobType {
    PARTTIME
    FULLTIME
  }

  type Agent {
    name: String!
    email: String!
    jobTitle: String!
    jobType: JobType!
    shifts: [Shift!]!
  }

  input UpdateAgentInput {
    name: String
    email: String
    jobTitle: String
    jobType: JobType
  }

  type UpdateAgentOutput {
    name: String
    email: String
    jobTitle: String
    jobType: JobType
  }

  extend type Query {
    GetAgent: Agent
  }

  extend type Mutation {
    UpdateAgent(input: UpdateAgentInput!): UpdateAgentOutput!
  }
`;
