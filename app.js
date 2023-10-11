const express = require('express')
const app = express()

const urlprefix = '/api'
const mongoose = require('mongoose')
const Fruit = require('./models/fruit')
const fs = require('fs')
const cert = fs.readFileSync('keys/certificate.pem')
const options = {
    server: connstring = 'mongodb+srv://projectAdmin01:<s8r4mcT5P3T8vwsm>@cluster0.iiky7yl.mongodb.net/?retryWrites=true&w=majority'
}
    mongoose.connect(connstring)
    .then(() =>
    {
        console.log('Connected :-)')
    })
    .catch(() =>
    {
        console.log('Not Connected :-(')
    },options);
