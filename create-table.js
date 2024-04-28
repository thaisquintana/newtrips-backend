import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => {
//     console.log('table apagada')
// })

sql`
    CREATE TABLE videos (
        id      TEXT PRIMARY KEY,
        name    TEXT,
        email   TEXT,
        cpf     TEXT,
        address TEXT,
        cep     INTEGER,
        state   TEXT,
        city    TEXT,
        password    TEXT,
    )
`.then(() => {
    console.log('tabela criada')
})