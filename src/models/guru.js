import { DataTypes } from "sequelize";
import sequelizeInstance from "../config/sequalizeInstance.js";
import { uuidv7 } from "uuidv7";

const Guru = sequelizeInstance.define("Guru", {
    nuptk: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv7(),
        allowNull: false,
        unique: true,
    },
    nama_guru: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mata_pelajaran: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

export default Guru;