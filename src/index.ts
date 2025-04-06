import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createServer } from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema";

const app = express();
const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function start() {
  await server.start();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  httpServer.listen(4000, () => {
    console.log("🚀 Server graphql ready");
  });
}

start();
