import MuridService from "../services/muridService.js";

class MuridController {
    static async createMurid(req, res) {
        try {
            const murid = await MuridService.createMurid(req.body);
            res.status(201).json({ message: "Murid berhasil dibuat", murid });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllMurids(req, res) {
        try {
            const murids = await MuridService.getAllMurids();
            res.status(200).json(murids);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getMurid(req, res) {
        try {
            const murid = await MuridService.getMuridById(req.params.id_siswa);
            res.status(200).json(murid);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async updateMurid(req, res) {
        try {
            const updatedMurid = await MuridService.updateMurid(req.params.id_siswa, req.body);
            res.status(200).json({ message: "Murid berhasil diperbarui", updatedMurid });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteMurid(req, res) {
        try {
            await MuridService.deleteMurid(req.params.id_siswa);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default MuridController;
