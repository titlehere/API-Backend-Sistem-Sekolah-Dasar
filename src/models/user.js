import { DataTypes } from "sequelize";
import sequelizeInstance from "../config/sequalizeInstance.js";
import { uuidv7 } from "uuidv7";

const User = sequelizeInstance.define("User", {
    id: {
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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM("guru", "admin"),
        allowNull: false,
    },
});

export default User;
