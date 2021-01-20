import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { logGraphQLServer } from "../../helpers/logs";

export class ShiftsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001"; // process.env.BASE
  }

  willSendRequest(request: RequestOptions) {
    logGraphQLServer("calling Shifts API on mock backend");
  }

  async getShift() {
    return this.get(`shift`);
  }
}
