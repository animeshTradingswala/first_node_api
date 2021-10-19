import express from 'express';
import bodyparser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());
// If you are using Express 4.16+ you can now replace those lines with:
// app.use(express.json()); 
// app.use(express.urlencoded()); 

app.use('/users',userRoutes);

app.get('/',(request,response)=>{
    // console.log('hi');
    // console.log(request.body);
    response.send('<h1 style="color:blue;">Welcome to node.js</h1>');
});

app.listen(PORT, ()=>console.log(`Welcome to node.js: http://localhost:${PORT}`));