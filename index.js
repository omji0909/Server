const express = require("express");

const app=express();

const port = 8000;
app.get("/",(req,res) => res.send("Hey You are on the home page "));
app.get("/SignIn",(req,res) => res.send("Hey Welcome to SignIn Page "));
app.get("/SignUp",(req,res) => res.send("Hey Welcome to SignUp Page "));

app.listen(port,() => console.log(`Congratulations!! Your server is running at ${port}`));

const admin = (req,res) => {
    return res.send("Admin Dashboard");
};
const Islogged  = (req,res,next) => {
    console.log("Hey, He is logged In");
    next();
};

const isadmin = (req,res,next) => {
    console.log("Ya, I am admin");
    next();
}

app.get("/admin",Islogged,isadmin,admin);


app.get("/admin",(req,res) => {
    return res.send("Hey admin is running")
});
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))