import { IResolvers } from "apollo-server-express";

export const shiftsResolvers: IResolvers = {
  Query: {
    GetShift: async (_, __, { dataSources }) => {
      //business logic
      return dataSources.shiftsAPI.getShift();
    },
  },
};
