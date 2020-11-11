import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: '192.168.0.99',
    database: 'saeco',
    password: '123456',
    port: 5432,
    ssl: false,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    
});