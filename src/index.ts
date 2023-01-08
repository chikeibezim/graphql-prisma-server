const { createServer } = require("node:http");
const { createYoga, createSchema } = require("graphql-yoga");

const yoga = createYoga({
    schema: createSchema({
        typeDefs: `
            type Query {
                hello: String
            }
        `,
        resolvers: {
            Query: {
                hello: () => "Hello from Yoga"
            }
        }
    })
})
const port = Number(process.env.API_PORT) || 4000;

const server = createServer(yoga);

server.listen(port, () => {
    console.log(`GraphQL Server ready at localhost:${port}/graphql`)
})