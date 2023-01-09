//create a reusable instance of Prisma Client that will
//be used to query the database and provide the types requied by the builder  in /src/builder.ts

import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();