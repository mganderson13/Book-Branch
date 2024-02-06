const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello!!!');
});

//Route files 
const authRoutes = require('./routes/auth');
const mybooksRoutes = require('./routes/mybooks.js');

//Use routes
app.use('/auth', authRoutes);
app.use('/mybooks', mybooksRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});