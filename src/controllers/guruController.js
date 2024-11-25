import GuruService from "../services/guruService.js";

class GuruController {
    static async createGuru(req, res) {
        try {
            const guru = await GuruService.createGuru(req.body);
            res.status(201).json({ message: "Guru berhasil dibuat", guru });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllGurus(req, res) {
        try {
            const gurus = await GuruService.getAllGurus();
            res.status(200).json(gurus);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getGuru(req, res) {
        try {
            const guru = await GuruService.getGuruById(req.params.nuptk);
            res.status(200).json(guru);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async updateGuru(req, res) {
        try {
            const updatedGuru = await GuruService.updateGuru(req.params.nuptk, req.body);
            res.status(200).json({ message: "Guru berhasil diperbarui", updatedGuru });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static async deleteGuru(req, res) {
        try {
            await GuruService.deleteGuru(req.params.nuptk);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default GuruController;
