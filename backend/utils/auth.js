import jwt from 'jsonwebtoken'

export const generateToken = (userInfo) => {
    if (!userInfo) {
        return null
    }


    return jwt.sign(
        userInfo,
        process.env.JWT_SECCRET,
        { expiresIn: '1h' }
    )
}

export const verifyToken = (username, token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, response) => {
        if (err) {
            return {
                verified: false,
                message: 'invalid token'
            }
        }

        if (response.username !== username) {
            return {
                verified: false,
                message: 'invalid user'
            }
        }

        return {
            verified: true,
            message: 'verified'
        }
    })
}