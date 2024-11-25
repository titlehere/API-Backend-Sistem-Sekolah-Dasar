import express from "express";
import GuruController from "../controllers/guruController.js";
import { validate } from "../middlewares/validate.js";
import { guruValidationSchema } from "../validations/guruValidation.js";

const router = express.Router();

// Route untuk membuat guru baru dengan validasi
router.post("/", validate(guruValidationSchema), GuruController.createGuru);

// Route lain (tanpa validasi tambahan)
router.get("/", GuruController.getAllGurus);
router.get("/:nuptk", GuruController.getGuru);
router.put("/:nuptk", validate(guruValidationSchema), GuruController.updateGuru);
router.delete("/:nuptk", GuruController.deleteGuru);

export default router;