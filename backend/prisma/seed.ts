import { PrismaClient } from ".prisma/client"
import { hash } from "bcrypt";

import { users } from "../src/utils/mockData"

const prisma = new PrismaClient()

console.log("Here are my imports, ", users);

async function seed() {
    for (let user of users) {
        const hashedPassword = await hash(user.password, 10)
        user = {...user, password: hashedPassword}
        await prisma.user.create({
            data: user
        })
    }
}

seed()
.catch((e)=>{
    console.error(e);
    process.exit(1)
})
.finally(async ()=>{
    await prisma.$disconnect()
})