import pool from "../db.js";

export const ping = async (req, res) => {
    try {
        const result = await pool.query('SELECT "Ping Pong 13" as result');
        res.json(result[0]);
    } catch (error) {
        console.error('Error pinging database:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
