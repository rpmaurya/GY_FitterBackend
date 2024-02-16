import mongoose,{connect} from "mongoose";
const database = process.env.DATABASE_URL || "mongodb://localhost:27017/enotebook";
const dbconnect= mongoose.connect(database).then(()=>{
console.log("db is connected");
}).catch((err)=>{
console.log(err);
});

export default  dbconnect;