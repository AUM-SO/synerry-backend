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

//version borntodev
// const swaggerOptions = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'API Counter Visit Website',
//             version: '1.0.0',
//             description: "API Counter Visit Website"
//         },
//         servers: [
//             {
//                 url: process.env.REACT_APP_API,
//             },
//         ],
//     },
// }

// const swaggerSpec = swaggerJSDoc(swaggerOptions)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const swaggerDefinition = {
    info: {
        title: 'API Counter Visit Website',
        version: '1.0.0',
        description: 'API Counter Visit Website',
    },
    basePath: process.env.REACT_APP_API,
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
