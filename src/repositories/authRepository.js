import User from "../models/user.js";

class AuthRepository {
    /**
     * Mencari user berdasarkan username.
     * @param {string} username - Username pengguna.
     * @returns {Object} - Data user jika ditemukan, null jika tidak.
     */
    static async findUserByUsername(username) {
        return await User.findOne({ where: { username } });
    }

    /**
     * Membuat user baru.
     * @param {Object} data - Data user baru.
     * @returns {Object} - User yang berhasil dibuat.
     */
    static async createUser(data) {
        return await User.create(data);
    }
}

export default AuthRepository;
