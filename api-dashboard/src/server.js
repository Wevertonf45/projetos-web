//Importações
import express from 'express';
import routes from './routes.js';
import cors from 'cors';

//Configurações
const app = express();
app.use(cors());


app.listen(3000, () => console.log('Server running on port 3000'));

app.use(express.json());

app.use('/', routes);