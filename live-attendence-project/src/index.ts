import express from "express";
import { Signin, Signup } from "./controller/controller.js";
import { dbConnection } from "./utils/dbConnection.js";
const route=express.Router();
const app=express();
app.use(express.json());

route.post("/signup",Signup);
route.post("/signin",Signin);
 app.use("/auth",route);
 async function server() {
 try{
     await dbConnection();
     app.listen(3000,()=> {
        console.log("server started listening to port 3000");
     })
}
catch(e) {
    console.log("Error ocurred while connecting to server ");
}
 }
 server();