import express from 'express';
import empleadosRutas from './routes/empleados.routes.js';
import indexRutas from './routes/index.routes.js';

const app = express();

app.use(express.json())
app.use(indexRutas)
app.use(empleadosRutas)

app.listen(3000)
console.log('Server running on port 3000')