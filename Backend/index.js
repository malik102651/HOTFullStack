const express = require('express');
const app = express();
const connectDB = require('./Config/db')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const userRoutes = require('./Routes/userRoutes');
const appRoutes = require('./Routes/appRoutes')
const { notFound, errorHandler } = require('./Middlewares/errorMiddleware');
//const port = '3001'

dotenv.config();
connectDB();
app.use(express.json());
const port = process.env.PORT || 3001

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// app.get('/',(req,res)=>{
//     res.send('Welcome Dear!')
// })

app.use('/api/users', userRoutes)
app.use('/api/app', appRoutes)

app.use(notFound)
app.use(errorHandler)

//------------ DEPLOYMENT -----------------

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    })

} else {
    app.get('/', (req, res) => {
        res.send("API is running......");
    });
}

app.listen(port, () => {
    console.log(`House of Tutor app start at http://localhost:${port}`);
})