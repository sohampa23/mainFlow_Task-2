import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from './config/mongobd.js'
import router from './routes/auth_routes.js'
import userouter from "./routes/user_routes.js";
// import addtocart from "./routes/cart_route.js"


const app = express();
const port = process.env.PORT || 5000
connectDB();

// const allowedOrigins = ['http://localhost:5174']


app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin:allowedOrigins, credentials:true}))
app.use(cors({
  origin: 'http://localhost:5174', // Explicitly allow your frontend URL
  credentials: true // Allow cookies and auth headers
}));
  

// API End-points--
app.use('/api/auth',router)
app.use('/api/user',userouter)
// app.use('/api/cart',addtocart);

app.use('/',(req,res)=>res.send("Api working....."))

app.listen(port, ()=> console.log(`Server started on ${port}.........`));

