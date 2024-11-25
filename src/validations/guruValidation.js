import { z } from "zod";

export const guruValidationSchema = z.object({
    nuptk: z.string().min(10, "NUPTK harus minimal 10 karakter").max(16, "NUPTK maksimal 16 karakter"),
    nama_guru: z.string().min(3, "Nama guru harus minimal 3 karakter"),
    mata_pelajaran: z.string().min(3, "Mata pelajaran harus minimal 3 karakter"),
    email: z.string().email("Email tidak valid"),
});
