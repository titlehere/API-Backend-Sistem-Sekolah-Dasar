import KelasRepository from "../repositories/kelasRepository.js";

class KelasService {
    static async createKelas(data) {
        return await KelasRepository.createKelas(data);
    }

    static async getAllKelas() {
        return await KelasRepository.getAllKelas();
    }

    static async getKelasById(id_kelas) {
        const kelas = await KelasRepository.getKelasById(id_kelas);
        if (!kelas) throw new Error("Kelas tidak ditemukan");
        return kelas;
    }

    static async updateKelas(id_kelas, data) {
        return await KelasRepository.updateKelas(id_kelas, data);
    }

    static async deleteKelas(id_kelas) {
        return await KelasRepository.deleteKelas(id_kelas);
    }
    
    static async getAllKelasWithMurids() {
        const kelasList = await KelasRepository.getAllKelas();

        // Iterasi kelas dan tambahkan murid ke kelas
        const kelasData = await Promise.all(
            kelasList.map(async (kelas) => {
                const murid = await MuridRepository.getMuridsByKelasId(kelas.id_kelas);
                return {
                    id_kelas: kelas.id_kelas,
                    nama_kelas: kelas.nama_kelas,
                    murid,
                };
            })
        );

        return kelasData;
    }
}

export default KelasService;