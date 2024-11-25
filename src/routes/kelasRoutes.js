import express from "express";
import KelasController from "../controllers/kelasController.js";
import { validate } from "../middlewares/validate.js";
import { kelasValidationSchema } from "../validations/kelasValidation.js";

const router = express.Router();

// Route untuk membuat kelas baru dengan validasi
router.post("/", validate(kelasValidationSchema), KelasController.createKelas);

// Route lain (tanpa validasi tambahan)
router.get("/", KelasController.getAllKelas);
router.get("/:id_kelas", KelasController.getKelas);
router.put("/:id_kelas", validate(kelasValidationSchema), KelasController.updateKelas);
router.delete("/:id_kelas", KelasController.deleteKelas);

export default router;
