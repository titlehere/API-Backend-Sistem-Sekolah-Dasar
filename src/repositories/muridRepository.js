import Murid from "../models/murid.js";

class MuridRepository {
    static async createMurid(data) {
        return await Murid.create(data);
    }

    static async getAllMurids() {
        return await Murid.findAll();
    }

    static async getMuridById(id_siswa) {
        return await Murid.findByPk(id_siswa);
    }

    static async updateMurid(id_siswa, data) {
        const murid = await Murid.findByPk(id_siswa);
        if (!murid) throw new Error("Murid not found");
        return await murid.update(data);
    }

    static async deleteMurid(id_siswa) {
        const murid = await Murid.findByPk(id_siswa);
        if (!murid) throw new Error("Murid not found");
        return await murid.destroy();
    }
    
    static async getMuridsByKelasId(id_kelas) {
        return await Murid.findAll({ where: { id_kelas } });
    }
}

export default MuridRepository;
