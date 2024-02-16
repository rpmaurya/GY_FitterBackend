
import *as dotenv from 'dotenv';
dotenv.config();
import express,{Request,Response ,NextFunction} from "express";
import dbconnect from './config/db';
import router from "./routers/auth";
import bodyParser, { BodyParser} from 'body-parser';
import cors from 'cors';
// import responseMiddleware from './common/responses';
import {customResponseMiddleware} from "./common/responses";




const app = express();
const PORT = process.env.PORT || 9000;

app.use(customResponseMiddleware);
app.use(cors());




app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/auth',router)

// app.get('/home',(req:Request,resp:Response)=>{
//     resp.send('Ramkewal');
   
// })


export const Cors=(req:Request, res:Response, next:NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  };
app.use(Cors)
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type');
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials',true);
//     // Pass to next layer of middleware
//     next();
// });

// app.use(cors({
//     origin: 'localhost:9000',  // Replace with your allowed origin(s)
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,  // Allow cookies and credentials
//   }));



// Error handling
app.use((error:any, req:Request, res:Response, next:NextFunction) => {
    console.error('ss',error);
    // return res.errored(400, error.message || error);
});
dbconnect;
app.listen(PORT,()=>{
    console.log(`Server is running on port No:-${PORT}`);
});