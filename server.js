import { fastify } from "fastify";
// import { DatabaseMemory } from './database-memory.js'
import { DadabasePostgres } from "./database-postgres.js";
import cors from '@fastify/cors'

const server = fastify();

// const database = new DatabaseMemory()
const database = new DadabasePostgres();

await server.register(cors, { 
  origin:['http://localhost:5173', 'http://localhost:3333']
})



server.post("/subscriptions", async (request, reply) => {
  const { name, address, cep, state, city, cpf, email, plan, status } =
    request.body;
  await database.create({
    name,
    address,
    cep,
    state,
    city,
    cpf,
    email,
    plan,
    status,
  });

  return reply.status(201).send();
});

server.get("/subscriptions", async (request) => {
  const search = request.query.search;
  const subscriptions = await database.list(search);

  return subscriptions;
});


server.get("/subscriptions/:id", async (request) => {
  const subscriptionId = request.params.id;
  const subscriptions = await database.subscription(subscriptionId);

  return subscriptions;
});

server.put("/subscriptions/:id", async (request, reply) => {
  const subscriptionId = request.params.id;
  const { name, address, cep, state, city, cpf, email, plan, status } =
    request.body;
  await database.update(subscriptionId, {
    name,
    address,
    cep,
    state,
    city,
    cpf,
    email,
    plan,
    status,
  });

  return reply.status(204).send();
});

server.delete("/subscriptions/:id", async (request, reply) => {
  const subscriptionId = request.params.id;

  await database.delete(subscriptionId);

  return reply.status(204).send();
});


server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 3333,
});
