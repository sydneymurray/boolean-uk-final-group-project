import dbClient from "../../utils/client"
import { User } from "prisma/prisma-client"
import { hash } from "bcrypt"

const create = async ({ data: newUser } : { data : User }) => {
    const passwordString = newUser.password

    const hashedPassword = await hash(passwordString, 10)
    const savedUser = await dbClient.user.create({ data: {...newUser, password: hashedPassword} }) 

    return savedUser
}

export default {
    ...dbClient.user,
    create
}