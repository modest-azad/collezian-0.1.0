// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req, res)=>{
  res.send("Hello, Server is running.");
});

app.listen(port,()=>{
  console.log(`Server is running at ${port}`)
})