import express from "express";
import MuridController from "../controllers/muridController.js";
import { validate } from "../middlewares/validate.js";
import { muridValidationSchema } from "../validations/muridValidation.js";

const router = express.Router();

// Route untuk membuat murid baru dengan validasi
router.post("/", validate(muridValidationSchema), MuridController.createMurid);

// Route lain (tanpa validasi tambahan)
router.get("/", MuridController.getAllMurids);
router.get("/:id_siswa", MuridController.getMurid);
router.put("/:id_siswa", validate(muridValidationSchema), MuridController.updateMurid);
router.delete("/:id_siswa", MuridController.deleteMurid);

export default router;
