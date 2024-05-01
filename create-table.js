import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS subscriptions;`.then(() => {
//     console.log('table apagada')
// })

// to create table run command node create-table.js

sql`
    CREATE TABLE subscriptions (
        id      TEXT PRIMARY KEY,
        name    TEXT,
        email   TEXT,
        cpf     TEXT,
        cep     TEXT,
        address TEXT,
        state   TEXT,
        city    TEXT,
        plan    TEXT,
        status  TEXT
    )
`.then(() => {
    console.log('tabela criada')
})