import express from "express";
import bodyParser from "body-parser";
import { logMockBackend } from "../helpers/logs";

export const startMockBackend = () => {
  const mockBackendPort = 3001;
  const mockBackendServer = express();

  mockBackendServer.use(bodyParser.json());

  let agent = {
    name: "John Doe",
    email: "johndoe@test.com",
    jobTitle: "support agent",
    jobType: "FULLTIME",
    shifts: [`http://localhost:${mockBackendPort}/shift`],
  };

  mockBackendServer.get("/agent", (req, res) => {
    res.send(agent);
  });

  mockBackendServer.post("/agent", (req, res) => {
    logMockBackend("req body", req.body);
    agent = {
      ...agent,
      name: req.body.name || agent.name,
      email: req.body.email || agent.email,
      jobTitle: req.body.jobTitle || agent.jobTitle,
      jobType: req.body.jobType || agent.jobType,
    };

    res.send(req.body);
  });

  mockBackendServer.get("/shift", (req, res) => {
    res.send({
      assignee: `http://localhost:${mockBackendPort}/agent`,
      activityName: "support queue",
      startTime: 9,
      endTime: 12,
    });
  });

  mockBackendServer.listen(mockBackendPort, () => {
    logMockBackend(
      `Mock backend running at http://localhost:${mockBackendPort}`
    );
  });
};
