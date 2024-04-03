import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'empleadosdb',
    password: 'Francog15',
});


// const pool = createPool({
//     host: 'ep-muddy-glitter-a4w51pms-pooler.us-east-1.aws.neon.tech',
//     user: 'default',
//     database: 'verceldb',
//     password: 'ct9BWjhD2COr',
// });

export default pool;
