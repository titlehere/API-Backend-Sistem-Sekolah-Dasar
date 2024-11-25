import { DataTypes } from "sequelize";
import sequelizeInstance from "../config/sequalizeInstance.js";
import { uuidv7 } from "uuidv7";

const Murid = sequelizeInstance.define("Murid", {
    id_siswa: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv7(),
        allowNull: false,
        unique: true,
    },
    nama_siswa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jenis_kelamin: {
        type: DataTypes.ENUM("Laki-laki", "Perempuan"),
        allowNull: false,
    },
    id_kelas: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Kelas",
            key: "id_kelas",
        },
    },
});

export default Murid;