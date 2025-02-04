import { buildResponse } from '../utils/util';
import { getUser, saveUser } from '../db/user';
import { generateToken } from '../utils/auth'
import bcrypt from 'bcryptjs'

export const login = async (user) => {
    const { username, password } = user;
    if (!user || !username || !password) {
        return buildResponse(401, {
            message: 'username and password are required'
        })
    }

    const dynamoUser = await getUser(username);
    if (!dynamoUser || !dynamoUser.username) {
        return buildResponse(404, {
            message: 'user does not exist'
        });
    }

    //Compare passwords 
    if (!bcrypt.compareSync(password, dynamoUser.password)) {
        return buildResponse(403, {
            message: 'password is incorrect'
        });
    }

    const userInfo = {
        username: dynamoUser.username,
        name: dynamoUser.name
    }

    const token = generateToken(userInfo);
    const response = {
        user: userInfo,
        token,
    }

    return buildResponse(200, response);
}