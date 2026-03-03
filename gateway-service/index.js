// ponto de acesso central

const express = require("express");
const proxy = require("express-http-proxy");
const app = express();
const cors = require('cors');

app.use(cors()); 
app.use('/access', proxy('http://access-service:3001', {
    proxyReqPathResolver: (req) => '/access'
}));

app.use('/members', proxy('http://members-service:3003', {
    proxyReqPathResolver: (req) => '/members'
}));

app.use('/workouts', proxy('http://workout-service:3004', {
    proxyReqPathResolver: (req) => '/workouts'
}));

app.listen(3002, () => console.log("Gateway da Academia, 3002"))