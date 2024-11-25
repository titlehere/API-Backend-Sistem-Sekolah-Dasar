import Kelas from "../models/kelas.js";

class KelasRepository {
    static async createKelas(data) {
        return await Kelas.create(data);
    }

    static async getAllKelas() {
        return await Kelas.findAll();
    }

    static async getKelasById(id_kelas) {
        return await Kelas.findByPk(id_kelas);
    }

    static async updateKelas(id_kelas, data) {
        const kelas = await Kelas.findByPk(id_kelas);
        if (!kelas) throw new Error("Kelas not found");
        return await kelas.update(data);
    }

    static async deleteKelas(id_kelas) {
        const kelas = await Kelas.findByPk(id_kelas);
        if (!kelas) throw new Error("Kelas not found");
        return await kelas.destroy();
    }
}

export default KelasRepository;
