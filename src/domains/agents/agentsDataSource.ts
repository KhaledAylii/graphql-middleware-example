import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { logGraphQLServer } from "../../helpers/logs";

export class AgentsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001";
  }

  willSendRequest(request: RequestOptions) {
    logGraphQLServer("calling Agents API on mock backend");
  }

  async getAgent() {
    return this.get(`agent`);
  }

  async updateAgent(input: any) {
    return this.post(`agent`, { ...input });
  }
}
