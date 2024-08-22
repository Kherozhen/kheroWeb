const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();

// Charger le fichier YAML
const swaggerDocument = yaml.load(fs.readFileSync('./back_end/swagger.yaml', 'utf8'));

// Configurez le chemin d'accès à Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Démarrez le serveur
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});