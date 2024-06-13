require ('dotenv').config();
const express = require('express');
const db = require('./models'); 
const artistRoutes = require('./routes/artistRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', artistRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
