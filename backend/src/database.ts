import { createPool, Pool } from 'mysql2/promise'
import  mysql from 'mysql'

require('dotenv').config()


// Database connection. Can use config from abqmural.env file (based on example.env) or the defaults


export async function connect (): Promise<Pool> {
    const connection = await createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 10,
        namedPlaceholders: true
    })
    return connection
}
let connection

export const  dbConfig = {
    host: "localhost",
    port: 3306,
    user:"root",
    password: "",
    database:"testuser"
}

export async function handleConnection(){
    let connection = mysql.createConnection(dbConfig);
    connection.connect(err => {
        if (err) {
            console.log('Error creating connection');
            setTimeout(handleConnection, 2000)
        }
        console.log('Database is ready to roll');
    })
    connection.on('error', (err: any) => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    })
}


