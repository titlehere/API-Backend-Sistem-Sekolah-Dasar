import GuruRepository from "../repositories/guruRepository.js";

class GuruService {
    static async createGuru(data) {
        return await GuruRepository.createGuru(data);
    }

    static async getAllGurus() {
        return await GuruRepository.getAllGurus();
    }

    static async getGuruById(nuptk) {
        const guru = await GuruRepository.getGuruById(nuptk);
        if (!guru) throw new Error("Guru tidak ditemukan");
        return guru;
    }

    static async updateGuru(nuptk, data) {
        return await GuruRepository.updateGuru(nuptk, data);
    }

    static async deleteGuru(nuptk) {
        return await GuruRepository.deleteGuru(nuptk);
    }
}

export default GuruService;
