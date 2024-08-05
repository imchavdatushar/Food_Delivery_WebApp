import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Router from './routes/Routes.js';




//app config
const app = express();
const PORT = 4000;

// Database connection

Connection();

//middleware

app.use(express.json());
app.use(cors());
app.use('/', Router);
app.use('/images',express.static('uploads'));

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(PORT , () => console.log(`Connected succesfully to PORT ${PORT}`));




// mongodb+srv://chavdatushar9848:<password>@cluster0.n3i6ehs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0