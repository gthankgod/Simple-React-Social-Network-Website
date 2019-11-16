const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Api running'));

app.use('/api/users', require('./api/users'));
app.use('/api/posts', require('./api/posts'));
app.use('/api/profiles', require('./api/profile'));
app.use('/api/auth', require('./api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));