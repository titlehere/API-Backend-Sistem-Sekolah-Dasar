import express from "express";
import MuridController from "../controllers/muridController.js";
import KelasController from "../controllers/kelasController.js";

const router = express.Router();

// Mendapatkan semua murid di kelas tertentu
router.get("/kelas/:id_kelas/murid", async (req, res) => {
    try {
        const murid = await MuridController.getAllMurids(req, res);
        res.json(murid);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Menambahkan murid ke kelas tertentu
router.post("/kelas/:id_kelas/murid", async (req, res) => {
    try {
        const murid = await MuridController.createMurid(req, res);
        res.status(201).json(murid);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;