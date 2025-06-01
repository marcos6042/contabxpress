import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://postgres:Mam604200@@db.jxiznsakfihhkieldnst.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;
