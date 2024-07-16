const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';

dotenv.config();

export const generateAccessToken = (username: string) => {
    return jwt.sign(username, process.env.TOKEN_SECRET);
}

