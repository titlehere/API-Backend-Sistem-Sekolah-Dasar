import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthRepository from "../repositories/authRepository.js";

class AuthService {
    /**
     * Membuat akun baru oleh admin (password ditentukan admin).
     * @param {Object} data - Data akun baru.
     * @returns {Object} - Akun yang berhasil dibuat.
     */
    static async registerUser(data) {
        const { username, password, role } = data;

        // Cek username sudah digunakan
        const existingUser = await AuthRepository.findUserByUsername(username);
        if (existingUser) {
            throw new Error("Username sudah digunakan");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user database
        return await AuthRepository.createUser({
            username,
            password: hashedPassword,
            role,
        });
    }

    /**
     * Login user dengan username dan password.
     * @param {Object} data - Data login.
     * @returns {Object} - Token JWT dan data user.
     */
    static async loginUser(data) {
        const { username, password } = data;

        // Cari user berdasarkan username
        const user = await AuthRepository.findUserByUsername(username);
        if (!user) {
            throw new Error("Username atau password salah");
        }

        // Validasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Username atau password salah");
        }

        // Generate token JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // Token berlaku selama 1 jam
        );

        return {
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        };
    }
}

export default AuthService;