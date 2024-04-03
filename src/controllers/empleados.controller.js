import pool from '../db.js';

export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleado');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching empleados:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createEmpleados = async (req, res) => {
    try {
        const { nombre, salario } = req.body;
        const [rows] = await pool.query('INSERT INTO empleado (nombre,salario) VALUES (?,?)', [nombre, salario]);
        res.send({
            id: rows.insertId,
            nombre,
            salario
        });
    } catch (error) {
        console.error('Error creating empleado:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateEmpleados = (req, res) => res.send('Actualizando empleados');

export const deleteEmpleados = (req, res) => res.send('Borrando empleados');
