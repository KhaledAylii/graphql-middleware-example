import { IResolvers } from "apollo-server-express";

export const agentsResolvers: IResolvers = {
  Query: {
    GetAgent: async (_, __, { dataSources }) => {
      const agent = await dataSources.agentsAPI.getAgent();
      let shift = await dataSources.shiftsAPI.getShift();
      shift.assignee = agent.name;
      return { ...agent, shifts: [shift] };
    },
  },
  Mutation: {
    UpdateAgent: async (_, { input }, { dataSources }) => {
      return dataSources.agentsAPI.updateAgent(input);
    },
  },
};
