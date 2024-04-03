import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'impactos_empleados_user',
    password: 'XMr{SF7OvIIB',
    database: 'impactos_empleadosdb',
    
};

const pool = mysql.createPool(config);

export default pool;
