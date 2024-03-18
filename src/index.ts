import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/resolver.js";
import context from "./context/context.js";
import listTypeDefs from "./schema/schema.js";
import 'dotenv/config';

const server = new ApolloServer({
    typeDefs: listTypeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { 
        port: Number(process.env.PORT) || 4000 
    },
    context: context
});
  
console.log(`🚀  Server ready at: ${url}`);