import { buildResponse } from '../utils/util';
import { verifyToken } from '../utils/auth';

export const verify = (requestBody) => {
    if (!requestBody.user || !requestBody.user.username || !requestBody.token){
        return buildResponse(401, {
            verify: false,
            message: 'incorrect request body'
        })
    }

    const {user, token } = requestBody;
    const verification = verifyToken(user.username, token);
    if (!verification.verified) {
        return buildResponse(401, verification)
    }

    return buildResponse(200, {
        verified: true,
        message: 'success',
        user,
        token
    })
}