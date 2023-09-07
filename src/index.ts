import 'reflect-metadata';
import 'dotenv/config';
import app from './server';
import { AppDataSource } from './db/db-connection';

async function main() {
    try {
        // Conect DB
        await AppDataSource.initialize();
        console.log('DB ONLINE');
        // Start server
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port -> ${ process.env.PORT }`)
        });
    } catch (error) {
        console.log(error);
    }
};

main();
