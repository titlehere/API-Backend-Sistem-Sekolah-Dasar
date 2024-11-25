import express from "express";
import PdfController from "../controllers/pdfController.js";

const router = express.Router();

// Endpoint untuk generate PDF
router.get("/generate-pdf", PdfController.generateKelasPDF);

export default router;