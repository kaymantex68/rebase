const mongoose = require("mongoose");
const express = require("express");
const slugify = require('slugify')
require("dotenv").config();
const Product = require("./models/product");
const data = require('./data')
const app = express();

const category = 'ip'
const sub = 'outdoor'
const newCategory ='604a05e6b154f7272c559368'
const newSub ='604a06e97d276c24685929b9'
// mongoose
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(() => {
        console.log("DB connected OK");
        data.map(p => {
            uploadData(p, category, sub, newCategory, newSub)
        })
    })
    .catch((err) => console.log(`DB error connect ${err}`));

app.listen(6000, () => {
    console.log("Server started on port 6000");
});

// console.log('data--->', Data)

const uploadData = async (p, c, s, newCategory, newSub) => {
    if (p.type[1] === c && p.type[2] === s) {
    const result = await new Product({
        ...p,
        slug: slugify(p.name, { lower: true }),
        brandSlug: slugify(p.brand, { lower: true }),
        category: newCategory,
        sub: newSub
    }).save()
    
        // console.log('name:  ', p.name, 'category: ', p.type[1], ' sub: ', p.type[2])
    
    console.log(result.name, ' --> complete')
    }
};
