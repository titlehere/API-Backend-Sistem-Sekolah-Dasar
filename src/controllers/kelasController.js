import KelasService from "../services/kelasService.js";

class KelasController {
    static async createKelas(req, res) {
        try {
            const kelas = await KelasService.createKelas(req.body);
            res.status(201).json({ message: "Kelas berhasil dibuat", kelas });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllKelas(req, res) {
        try {
            const kelas = await KelasService.getAllKelas();
            res.status(200).json(kelas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getKelas(req, res) {
        try {
            const kelas = await KelasService.getKelasById(req.params.id_kelas);
            res.status(200).json(kelas);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async updateKelas(req, res) {
        try {
            const updatedKelas = await KelasService.updateKelas(req.params.id_kelas, req.body);
            res.status(200).json({ message: "Kelas berhasil diperbarui", updatedKelas });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteKelas(req, res) {
        try {
            await KelasService.deleteKelas(req.params.id_kelas);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default KelasController;
