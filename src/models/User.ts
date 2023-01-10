import { builder } from "../builder";
import { prisma } from '../db';
/*
    because we're using Pothos's Pisma Plugin, the builder instance now has a
    method named prismaObject you will use to define object types
    the method takes two params which are name (prisma model the type reps )
    and options (config for the defined type)
    code below is same as:
    type User {
        id: ID!
        name: String!
        messages: [Message!]!
    }
*/

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        messages: t.relation("messages")
    })
});

/*
    The code below:
    Adds a field to the GraphQL schema's Query type named "users"
    Defines a field that resolves to some type in your Prisma schema
    Lets Pothos know this field will resolve to an array of your Prisma Client's User type
    Sets up a resolver function for this field.
    the code below is same as:
    Query {
        users: [User!]!
    }
*/

builder.queryField("users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.user.findMany({ ...query })
        }
    })
)
