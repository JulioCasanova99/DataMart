const sequelize = require('./config/db');
require('./models/User'); // Asegúrate de importar el modelo para que Sequelize lo reconozca

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Sincronizar el modelo
        await sequelize.sync({ force: false });
        console.log('Database synchronized');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    } finally {
        await sequelize.close();
    }
}

testConnection();
