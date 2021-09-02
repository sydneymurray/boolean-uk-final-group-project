import dbClient from "../../utils/client"
import { User } from "prisma/prisma-client"
import { compare } from "bcrypt"

export const findUserWithValidation = async (userData: User) => {
    const userDataFromDB = await dbClient.user.findUnique({
        where: {
            email : userData.email
        }
    })

    if (!userDataFromDB) throw new Error("Username/Password is incorrect")

    const isPasswordValid = await compare(userData.password, userDataFromDB.password)

    if (!isPasswordValid) throw new Error("Username/Password is incorrect")

    return userDataFromDB
}