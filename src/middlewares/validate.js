import { ZodError } from "zod";

export const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // Memvalidasi body request
            next(); // Jika validasi berhasil, lanjutkan ke controller
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(400).json({
                    message: "Validation error",
                    errors: error.errors, // Detail error dari Zod
                });
            }
            next(error); // Error lain diteruskan ke error handler
        }
    };
};