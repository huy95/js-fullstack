import mySql from 'mysql2/promise'
import mysql from 'mysql2/promise'


const getDatabase = async () => {
    const connect = await mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejspro'
    });

    try {
        const [results, fields] = await connect.query(
            'SELECT * FROM `users`'
        )
        console.log(results)
        return results;
    } catch (err) {
        console.log(err)
        return [];
    }
}

export default getDatabase