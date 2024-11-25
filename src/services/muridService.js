import MuridRepository from "../repositories/muridRepository.js";

class MuridService {
    static async createMurid(data) {
        return await MuridRepository.createMurid(data);
    }

    static async getAllMurids() {
        return await MuridRepository.getAllMurids();
    }

    static async getMuridById(id_siswa) {
        const murid = await MuridRepository.getMuridById(id_siswa);
        if (!murid) throw new Error("Murid tidak ditemukan");
        return murid;
    }

    static async updateMurid(id_siswa, data) {
        return await MuridRepository.updateMurid(id_siswa, data);
    }

    static async deleteMurid(id_siswa) {
        return await MuridRepository.deleteMurid(id_siswa);
    }
}

export default MuridService;