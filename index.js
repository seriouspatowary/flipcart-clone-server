import dotenv from 'dotenv'
import express from 'express'
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config()
const app = express();
const port = process.env.PORT || 8001;


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)

Connection();


app.listen(port,()=>

    console.log(`Server is Successfully running on port ${port}`)
)

DefaultData();