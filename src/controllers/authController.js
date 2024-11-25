import AuthService from "../services/authService.js";

class AuthController {
    /**
     * Admin membuat user baru.
     * @param {Object} req - Request object.
     * @param {Object} res - Response object.
     */
    static async register(req, res) {
        try {
            const user = await AuthService.registerUser(req.body);
            res.status(201).json({ message: "User berhasil dibuat", user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    /**
     * Login user dengan username dan password.
     * @param {Object} req - Request object.
     * @param {Object} res - Response object.
     */
    static async login(req, res) {
        try {
            const { token, user } = await AuthService.loginUser(req.body);
            res.status(200).json({ message: "Login berhasil", token, user });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

export default AuthController;
