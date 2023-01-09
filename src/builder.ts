//creating an instance of the pothos schema builder as a sharable module.
import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";

//import PrismaPlugin and the generated Pothos Types and apply to builder
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";

import { prisma } from "./db";

export const builder = new SchemaBuilder<{
    Scalars: {
      Date: { Input: Date; Output: Date };
    };
    PrismaTypes: PrismaTypes;
  }>({ 
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma
    }
});

builder.addScalarType("Date", DateResolver, {});

//initialize builder query type to access te objects defined in models folder
//this registers a special graphQL type that holds the definitions for each of 
//the queries and acts as the entry point to your GraphQL API.
//You define this type in this file to ensure that the query buider has a query type
//defined. That way, you can add query fields to it later on
builder.queryType({})