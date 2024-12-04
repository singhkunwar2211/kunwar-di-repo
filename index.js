const express= require("express");
const app =express();

app.get("/",(req, res)=>{
res.json([
    {
        id:1,
        name:"Kunwar Singh",
        age:75555555555555
    }
])
});
app.listen(5000,()=>{
    console.log("app is running on 5000 port")
})