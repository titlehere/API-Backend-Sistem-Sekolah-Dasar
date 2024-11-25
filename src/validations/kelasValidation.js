import { z } from "zod";

export const kelasValidationSchema = z.object({
    id_kelas: z.string().uuid("ID Kelas harus berupa UUID valid"),
    nama_kelas: z.string().min(3, "Nama kelas harus minimal 3 karakter"),
});
