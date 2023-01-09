import { builder } from "../builder";

//because we're using Pothos's Pisma Plugin, the builder instance now has a
//method named prismaObject you will use to define object types
// the method takes two params which are name (prisma model the type reps )
//and options (confid for the defined type)

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        messages: t.relation("messages")
    })
});