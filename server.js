const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");

const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"))
});

app.post("/contact",(req,res)=>{
    const {name,email,message}=req.body;
    console.log("New Message",{name,email,message});
  res.send(`
    <h2>Thank you,${name}</h2>
    <p>We received your message:</p>
     <a href="/">Go Back Home</a>
    `
);
});

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})