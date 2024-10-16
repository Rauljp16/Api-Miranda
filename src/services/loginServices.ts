const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
import UserModel from '../models/userModel';
var bcrypt = require('bcryptjs');

dotenv.config();

export const generateAccessToken = async (username: string, password: string) => {
    const user = await UserModel.findOne({ email: username });

    if (!user) {
        throw new Error('User not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
        const token = jwt.sign(user.email, process.env.TOKEN_SECRET)
        const userWithoutPassword = {
            _id: user._id,
            name: user.name,
            email: user.email,
            foto: user.foto,
        };
        return {
            token,
            user: userWithoutPassword,
        };
    } else {
        throw new Error('Invalid credentials');
    }
};

