const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
require('./models/User'); // Importar el modelo para asegurar que Sequelize lo reconozca

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas de autenticación
app.use('/auth', authRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Sincronizar la base de datos
sequelize.sync({ force: false }) // No elimines datos existentes
    .then(() => {
        console.log('Database synchronized');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Unable to sync the database:', err);
    });
