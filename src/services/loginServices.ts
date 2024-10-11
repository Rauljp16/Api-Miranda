const jwt = require('jsonwebtoken');
import dotenv from 'dotenv';
import UserModel from '../models/userModel';
var bcrypt = require('bcryptjs');

dotenv.config();

export const generateAccessToken = async (username: string, password: string) => {
    // Buscar el usuario en la base de datos
    const user = await UserModel.findOne({ email: username });

    if (!user) {
        // Si el usuario no se encuentra, lanzamos un error
        throw new Error('User not found');
    }

    // Comparar la contraseña proporcionada con la almacenada en la BD
    const match = await bcrypt.compare(password, user.password);

    if (match) {
        // Si la contraseña coincide, generamos el token
        console.log("prueba");

        const token = jwt.sign(
            { email: user.email, name: user.name }, // Incluir los datos relevantes en el payload
            process.env.TOKEN_SECRET,
            { expiresIn: '1h' }  // El token expirará en 1 hora
        );

        // Crear un objeto del usuario excluyendo la contraseña
        const userWithoutPassword = {
            _id: user._id,
            name: user.name,
            email: user.email,
            // Otros campos del usuario que deseas enviar al frontend
        };
        // Devolvemos el token y los datos del usuario sin la contraseña
        console.log("User test:", userWithoutPassword);
        return {
            token,
            user: userWithoutPassword,  // Devolver los detalles del usuario
        };
    } else {
        // Si la contraseña no coincide, lanzamos un error
        throw new Error('Invalid credentials');
    }
};
