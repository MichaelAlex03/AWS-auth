import { buildResponse } from '../utils/util';
import { getUser, saveUser } from '../db/user';
import bcrypt from 'bcryptjs'



export const register = async (userInfo) => {
    const name = userInfo.name;
    const email = userInfo.email;
    const username = userInfo.username;
    const password = userInfo.password;

    //Handle empty fields
    if (!username || !password || !email || !name) {
        return buildResponse(401, {
            message: 'All fields are required'
        })
    }

    //If username already exists
    const dynamoUser = await getUser(username.toLowerCase().trim());
    if (dynamoUser && dynamoUser.username) {
        return buildResponse(401, {
            message: 'username already exists in our database. please choose a different username'
        })
    }

    const encryptedPW = bcrypt.hashSync(password.trim(), 10);
    const user = {
        name,
        email,
        username: username.toLowerCase().trim(),
        password: encryptedPW
    }

    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse){
        return buildResponse(503, {
            message: 'Server Error. Please try again later.'
        })
    }

    return buildResponse(200, {
        username: username
    })
}



