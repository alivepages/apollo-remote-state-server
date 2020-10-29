"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const repos_1 = require("./modules/todos/repos");
const server = new apollo_server_1.ApolloServer({
    context: () => ({ todosRepo: repos_1.todosRepo }),
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers_1.resolvers
});
server.listen(process.env.PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map