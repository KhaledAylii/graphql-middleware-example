export const logMockBackend = (str: string, obj: any = "") => {
  console.log("\x1b[34m", `[Mock Backend] ${str}`, obj);
};

export const logGraphQLServer = (str: string, obj: any = "") => {
  console.log("\x1b[33m", `[GraphQL] ${str}`, obj);
};
