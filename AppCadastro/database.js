const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function setupDb() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            rua TEXT,
            numero TEXT,
            bairro TEXT,
            cidade TEXT,
            cpf TEXT,
            plano TEXT,
            valor REAL,
            velocidade TEXT
        )
    `);
    return db;
}

module.exports = setupDb;
