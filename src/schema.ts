import { builder } from "./builder";

import "./models/Message";
import "./models/User"

/*
The toSchema function generates an abstract syntax tree (AST) representation of your GraphQL schema. 
*/

export const schema = builder.toSchema();

//Below, you can see what the GraphQL representation would look like:

/*
scalar Date

type Message {
  body: String!
  createdAt: Date!
  id: ID!
}

type Query {
  users: [User!]!
}

type User {
  id: ID!
  messages: [Message!]!
  name: String!
}
*/