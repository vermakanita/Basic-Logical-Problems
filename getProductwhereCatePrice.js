import express from "express"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"true"}));

app.use("/product",product);



app.listen(5000,()=>{
    console.log("server start on 5000")
})






//route
import express from "express"

const route = express.Router();
route.get("/product",(req,res,next)=>{
    const data = {category:"electronics",price:{$lt:10000}};
    db.products.find(data).toArray((err,result)=>{
        if(err) return res.status(500).send(err);
        res.json(result);
    })

})

export default route;




