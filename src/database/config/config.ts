require('dotenv').config();

module.exports = {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "N3w_p@ssw0rD.",
    "database": process.env.DB_DATABASE || "securityproject",
    "host": process.env.DB_HOST || "localhost",
    "dialect": process.env.DB_DIALECT || "mysql",
    define: {
        timestamps: false
    }
}
