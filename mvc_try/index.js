import express from 'express';
import dotenv from 'dotenv';

const app=express();

import {router} from './src/routes/main.router.js';
import { product_router } from './src/routes/products.router.js';

app.use(router)
app.use('/productos',product_router)

const PORT=process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}!`));

