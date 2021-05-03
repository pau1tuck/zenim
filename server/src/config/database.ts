import { Pool } from "pg";

const database = new Pool({
    connectionString: process.env.DB_URL,
    connectionTimeoutMillis: 30000,
});

export default database;
