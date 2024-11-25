import { Sequelize } from "sequelize";
import "dotenv/config";

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const sequelizeInstance = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    pool: {
        min: 5,
        max: 10,
    },
    logging: false
});

sequelizeInstance.authenticate()
    .then(() => {
        console.log("Koneksi ke database berhasil");
    })
    .catch(err => {
        console.error("Tidak dapat terkoneksi ke database:", err);
    });

export default sequelizeInstance;