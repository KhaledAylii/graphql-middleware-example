import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import { dataSources } from "./dataSources";
import { logGraphQLServer } from "./helpers/logs";
import express from "express";
import { startMockBackend } from "./mock-backend/mockBackend";

const server = new ApolloServer({ schema, dataSources });

const app = express();
server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send("hi");
});

app.get('/restendpoint', () => {
  //business logic
})

app.listen({ port: 3000 }, () =>
  logGraphQLServer(
    `GraphQL server running at http://localhost:3000${server.graphqlPath}`
  )
);

// Mock backend
startMockBackend();
