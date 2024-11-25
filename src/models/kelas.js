import { DataTypes } from "sequelize";
import sequelizeInstance from "../config/sequalizeInstance.js";
import { uuidv7 } from "uuidv7";

const Kelas = sequelizeInstance.define("Kelas", {
    id_kelas: {
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
    nama_kelas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Kelas;