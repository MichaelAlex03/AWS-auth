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