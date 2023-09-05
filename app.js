
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');
app.use('/routes/stuff', stuffRoutes);
app.use('/middleware/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

mongoose.connect('mongodb+srv://mmonguillon:mercure10@jdrshop.vpc0shq.mongodb.net/',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});


module.exports = app;