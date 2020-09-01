require('dotenv').config()
import "reflect-metadata";

// import { ApolloServer } from "apollo-server";
import express from "express";
import { connect } from "mongoose";
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server-express';

import { UserResolver } from "./resolvers/UserResolver";

const PORT = process.env.PORT || 3000;

const main = async () => {
    const schema = await buildSchema({
        resolvers: [UserResolver]
    });

    // create mongoose connection
    const mongoose = await connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) console.log(`📍 MongoDB connection failed! Error: ${err}`);
        else console.log('📂 MongoDB connected successfully');
    });


    const server = new ApolloServer({ schema });
    const app = express();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    );
};

main().catch((error) => {
    console.log(error, 'error');
})