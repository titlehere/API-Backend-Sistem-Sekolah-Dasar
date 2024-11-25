import Guru from "../models/guru.js";

class GuruRepository {
    static async createGuru(data) {
        return await Guru.create(data);
    }

    static async getAllGurus() {
        return await Guru.findAll();
    }

    static async getGuruById(nuptk) {
        return await Guru.findByPk(nuptk);
    }

    static async updateGuru(nuptk, data) {
        const guru = await Guru.findByPk(nuptk);
        if (!guru) throw new Error("Guru not found");
        return await guru.update(data);
    }

    static async deleteGuru(nuptk) {
        const guru = await Guru.findByPk(nuptk);
        if (!guru) throw new Error("Guru not found");
        return await guru.destroy();
    }
}

export default GuruRepository;