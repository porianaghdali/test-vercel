import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  let connection;
  try {
    const body = await request.json();
    const { fullName,phone,email,hasBrokerAccount,selectedBroker } = body;

    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    connection = await pool.getConnection();
    
    const [result] = await connection.execute(
      'INSERT INTO cashback (full_name,phone_number,email,hasAccountInBroker,selectedBroker) VALUES (?, ?, ?, ?, ?)',
      [fullName,phone,email,hasBrokerAccount,selectedBroker]
    );
      
    return NextResponse.json({ success: true });
    
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ 
      error: 'خطا در ثبت درخواست',
      details: error.code || error.message
    }, { status: 500 });
  } finally {
    if (connection) {
      connection.release();
    }
  }
}