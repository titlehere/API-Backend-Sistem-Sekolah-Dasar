import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import sequelizeInstance from "./config/sequalizeInstance.js";
import redis from "redis";

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import guruRoutes from "./routes/guruRoutes.js";
import kelasRoutes from "./routes/kelasRoutes.js";
import muridRoutes from "./routes/muridRoutes.js";
import muridKelasRoutes from "./routes/muridKelasRoutes.js";
import pdfRoutes from "./routes/pdfRoutes.js";

// Load environment variables
dotenv.config();

// Redis Client
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

// Inisialisasi aplikasi Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/guru", guruRoutes);
app.use("/kelas", kelasRoutes);
app.use("/murid", muridRoutes);
app.use("/murid-kelas", muridKelasRoutes);
app.use("/pdf", pdfRoutes);

// Port server
const PORT = process.env.SERVER_PORT || 3000;

// Event Redis Connect
redisClient.on("connect", () => console.log("Redis connected successfully."));

// Menjalankan server
app.listen(PORT, async () => {
  try {
    // Hubungkan ke Redis
    await redisClient.connect();

    // Hubungkan ke database
    await sequelizeInstance.authenticate();
    console.log("Database connected successfully.");

    // Sinkronisasi model (optional, gunakan hanya saat pengembangan)
    // await sequelizeInstance.sync({ force: true });

    console.log(`Server berjalan di http://${process.env.SERVER_HOST}:${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error);
  }
});

export default app;