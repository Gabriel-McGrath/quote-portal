import "server-only";
import contractJson from "../src/prisma/contract.json" with { type: "json" };
import { contractFromJson } from "@prisma/orm-postgres/static";
import postgres from "@prisma/orm-postgres/runtime";

const contract = contractFromJson(contractJson); //Initialize the contract from the JSON file

// Create a global variable to hold the database instance so that it can be reused across requests 
// in development mode. This prevents creating multiple database connections during hot reloads.
const globalForDb = global as typeof globalThis & { db?: ReturnType<typeof postgres> }; 

const createDb = () => {
  // Create a new database instance using the contract and the database URL from environment variables  
  return postgres({ contract, url: process.env.DATABASE_URL! }); 
}

// If the global variable already has a database instance, use it; otherwise, create a new one.
export const db = globalForDb.db ??= createDb();

console.log(Object.keys(contract ??{}), "contract keys");