const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./db/connect');
const productRoutes = require('./routes/product');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// middleware or to set routers
app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || 3000;

const start =  async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
        });
    } 
    
    catch(error){
        console.log(error);
    }
}

start();

