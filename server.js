import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from 'mongoose';

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from "swagger-jsdoc";

import userdataroutes from './routes/userdataroutes.js'

dotenv.config();

const app = express();

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(express.json());
app.use(cors())

const swaggerDefinition = {
    info: {
        title: 'API Counter Visit Website',
        version: '3.0.0',
        description: 'API Counter Visit Website',
    },
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", userdataroutes);

const port = process.env.PORT_SERVER;
app.listen(port, () => console.log(`start server in port ${port}`));
