import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DadabasePostgres } from './database-postgres.js'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DadabasePostgres

server.post('/register-new-user', async (request, reply) => {
    const {name, email, cpf, address, cep, state, city, password, selected_plan} = request.body
    await database.create({
        name,
        email,
        cpf,
        address,
        cep,
        state,
        city,
        password,
        selected_plan

    })

    return reply.status(201).send()
})

server.get('/users', async (request) => {
    const search = request.query.search
    const users = await database.list(search)

    return users
})

server.put('/users/:id', async (request, reply) => {
    const userId = request.params.id
    const {name, email, cpf, address, cep, state, city, password, selected_plan} = request.body
    await database.update(userId, {
        name, email, cpf, address, cep, state, city, password, selected_plan
    })

    return reply.status(204).send()
})

server.delete('/users/:id', async (request, reply) => {
    const userId = request.params.id

   await database.delete(userId)

   return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})