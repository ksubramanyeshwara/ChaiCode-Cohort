// creating a server without ExpressJS and using built in package http

// Importing NodeJS http Module
// const http = require("http");

// Request Handler
// function requestHndler(req, res) {
//   console.log("Incoming Request...!");
//   switch (req.method) {
//     case "GET":
//       {
//         if (req.url === "/") return res.end("Homepage");
//         if (req.url === "/contact") return res.end("Contact US");
//         if (req.url === "/about") return res.end("About US");
//       }
//       break;
//     case "POST":
//       console.log("POST Request");
//       break;
//   }
//   res.end("Here's response");
// }

// Create Server
// const server = http.createServer(requestHndlerV2);

// server.listen(8000, function () {
//   console.log("Server Strted");
// });

// Importing Express
const express = require("express");

const requestHndlerV2 = express();

// Request Handler - using Express. Use this instead of requestHndler function
requestHndlerV2.get("/", function (req, res) {
  console.log("Incoming Request...!");
  res.end("Homepage");
});

requestHndlerV2.get("/contact", function (req, res) {
  console.log("Incoming Request...!");
  res.end("Contact US");
});

requestHndlerV2.get("/about", function (req, res) {
  console.log("Incoming Request...!");
  res.end("About US");
});

// Create Server using Express instead of http
requestHndlerV2.listen(8000, function () {
  console.log("Server Strted");
});
