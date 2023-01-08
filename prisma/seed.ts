import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
    //delete all user and message records
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});

    await prisma.user.create({
        data: {
            name: "Jack",
            messages: {
                create: [
                    {
                        body: "A note for jack"
                    },
                    {
                        body: "Another note for jack"
                    }
                ]
            }
        }
    });

    await prisma.user.create({
        data: {
            name: "Ryan",
            messages: {
                create: [
                    {
                        body: "A note for ryan"
                    },
                    {
                        body: "Another note for ryan"
                    }
                ]
            }
        }
    });

    await prisma.user.create({
        data: {
            name: "Adam",
            messages: {
                create: [
                    {
                        body: "A note for Adam"
                    },
                    {
                        body: "Another note for Adam"
                    }
                ]
            }
        }
    });
}

main().then(() => {
    console.log("Data seeded...")
})