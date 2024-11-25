import generatePDF from "../utils/generatePDF.js";

class PdfService {
    static async generateKelasPDF(kelasData) {
        // Lokasi output file PDF
        const outputFilePath = "./output/Daftar_Kelas_dan_Murid.pdf";

        // Panggil fungsi generatePDF
        await generatePDF(kelasData, outputFilePath);

        return outputFilePath;
    }
}

export default PdfService;
