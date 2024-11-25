import PdfService from "../services/pdfService.js";
import KelasService from "../services/kelasService.js";

class PdfController {
    static async generateKelasPDF(req, res) {
        try {
            // Ambil data kelas dan murid dari database melalui service
            const kelasData = await KelasService.getAllKelasWithMurids();

            // Generate PDF melalui service
            const filePath = await PdfService.generateKelasPDF(kelasData);

            // Kirim file PDF ke client
            res.download(filePath, "Daftar_Kelas_dan_Murid.pdf");
        } catch (error) {
            res.status(500).json({ message: "Gagal menghasilkan PDF", error: error.message });
        }
    }
}

export default PdfController;
