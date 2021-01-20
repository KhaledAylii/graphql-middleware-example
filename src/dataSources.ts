import { AgentsAPI } from "./domains/agents/agentsDataSource";
import { ShiftsAPI } from "./domains/shifts/shiftsDataSource";

export const dataSources = () => ({
  agentsAPI: new AgentsAPI(),
  shiftsAPI: new ShiftsAPI(),
});
