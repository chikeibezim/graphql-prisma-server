# graphql-prisma-server

GraphQL API using the graphQL yoga server

* Prisma was used to design the database model and interact with the database 
* I've also used Pothos to build a code first schema instead of the SDL approach hence generating our graphQL schema types and fields automatically to enforce type checking and ensure changes in our database or do not affect our schema. In other words, to prevent conflict.
