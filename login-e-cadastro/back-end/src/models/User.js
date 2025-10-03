import { Model, DataTypes } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true,
                    allowNull: false,
                },

                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },

                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },

                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },

            },
            {
                sequelize,
                tableName: "users",
                modelName: "User",
                underscored: true
            }
        )
    }
}

export default User