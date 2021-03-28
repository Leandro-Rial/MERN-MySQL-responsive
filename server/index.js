const express = require('express');
const cors = require('cors');

const app = express();

// Middelware
app.use(express.json());
app.use(cors());

// Database

// Routes
app.use('/api', require('./routes/postsRoutes'))

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on PORT: ', PORT);
})