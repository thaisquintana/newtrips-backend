import { randomUUID } from "node:crypto";
import { sql } from './db.js'

export class DadabasePostgres {
  async list(search) {
   let subscriptions

   if(search) {
    subscriptions = await sql`select * from subscriptions where status ilike ${'%' + search + '%'}`
   }

   else {
    subscriptions = await sql`select * from subscriptions`
   }
   return subscriptions
  }

  async create(subscription) {
    const {name, address, cep, state, city, cpf, email, plan, status} = subscription
    const subscriptionId = randomUUID();

    await sql`insert into subscriptions (id, name, address, cep, state, city, cpf, email, plan, status) VALUES(${subscriptionId}, ${name}, ${address}, ${cep}, ${state}, ${city}, ${cpf}, ${email}, ${plan}, ${status})`
   
  }

  async update(id, subscription) {
    const {name, address, cep, state, city, cpf, email, plan, status} = subscription

    await sql`update subscriptions set name = ${name}, address = ${address}, cep = ${cep}, state = ${state}, city = ${city}, cpf = ${cpf}, email = ${email}, plan = ${plan}, status = ${status} WHERE id = ${id} `
  }

  async subscription(id) {
    let subscription

    subscription = await sql`select * from subscriptions WHERE id = ${id}`

    return subscription
  }
  
  async delete(id) {
    await sql`delete from subscriptions WHERE id = ${id}`
  }
}
