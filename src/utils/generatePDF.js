import PDFDocument from "pdfkit";
import fs from "fs";

const generatePDF = async (kelasData, outputFilePath) => {
    return new Promise((resolve, reject) => {
        try {
            // Membuat instance PDFDocument
            const doc = new PDFDocument();

            // Stream ke file output
            const stream = fs.createWriteStream(outputFilePath);
            doc.pipe(stream);

            // Judul dokumen
            doc.fontSize(20).text("Daftar Kelas dan Murid", { align: "center" }).moveDown(2);

            // Iterasi data kelas dan murid
            kelasData.forEach((kelas) => {
                // Header untuk kelas
                doc.fontSize(16).text(`Kelas: ${kelas.nama_kelas}`, { underline: true });
                doc.fontSize(12).text(`ID Kelas: ${kelas.id_kelas}`).moveDown(0.5);

                if (kelas.murid && kelas.murid.length > 0) {
                    doc.fontSize(14).text("Murid:", { bold: true }).moveDown(0.3);

                    // Tabel murid
                    kelas.murid.forEach((murid, index) => {
                        doc.text(
                            `${index + 1}. Nama: ${murid.nama_siswa}, Jenis Kelamin: ${murid.jenis_kelamin}, ID: ${murid.id_siswa}`
                        );
                    });
                } else {
                    doc.fontSize(12).text("Tidak ada murid di kelas ini.").moveDown(0.5);
                }

                doc.moveDown(1.5); // Jarak antar kelas
            });

            // Menutup dokumen
            doc.end();

            // Resolve saat stream selesai
            stream.on("finish", () => {
                resolve("PDF berhasil dihasilkan");
            });

            stream.on("error", (err) => {
                reject(err);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export default generatePDF;
