import { z } from "zod";

export const muridValidationSchema = z.object({
    id_siswa: z.string().uuid("ID Siswa harus berupa UUID valid"),
    nama_siswa: z.string().min(3, "Nama siswa harus minimal 3 karakter"),
    jenis_kelamin: z.enum(["Laki-laki", "Perempuan"], "Jenis kelamin harus berupa 'Laki-laki' atau 'Perempuan'"),
    id_kelas: z.string().uuid("ID Kelas harus berupa UUID valid"),
});
