import { gql } from "apollo-server-express";

export const shiftsTypeDefs = gql`
  type Shift {
    assignee: String
    activityName: String!
    startTime: Int!
    endTime: Int!
  }

  extend type Query {
    GetShift: Shift
  }
`;
