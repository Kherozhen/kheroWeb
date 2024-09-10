const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

{/* const bcrypt = require('bcrypt');
const db = require('./models');
const Users = db.users;

const usersRoutes = require('./routes/users'); */}

const app = express();

// Charger le fichier YAML
const swaggerDocument = yaml.load(fs.readFileSync('./back_end/swagger.yaml', 'utf8'));

// Configurez le chemin d'accès à Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Ajout d'un utilisateur par défaut (par exemple, un administrateur)
{/* const createAdminUser = async () => {
  try {
    const email = 'kheroweb@test.tld';
    const password = 'kher0web';
    const existingUser = await Users.findOne({ where: { email } });
    
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await Users.create({ email, password: hashedPassword });
      console.log('Admin user created:', email);
    } else {
      console.log('Admin user already exists.');
    }
  } catch (err) {
    console.error('Error creating admin user:', err);
  }
};

// Créer l'utilisateur admin au démarrage
createAdminUser(); 


// Routes
app.use('/api/v1/users', usersRoutes); */}

// Démarrez le serveur
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});