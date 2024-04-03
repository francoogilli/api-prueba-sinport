import pool from '../db.js'

export const getEmpleados = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM empleado')
    res.json(rows)
}

export const createEmpleados = async(req, res) => {
    const {nombre,salario} = req.body
    const [rows] = await pool.query('INSERT INTO empleado (nombre,salario) VALUES (?,?)',[nombre,salario])
    res.send({
        id: rows.insertId,
        nombre,
        salario
    })
}

export const updateEmpleados = (req, res) => res.send('Actualizando empleados')

export const deleteEmpleados = (req, res) => res.send('Borrando empleados')