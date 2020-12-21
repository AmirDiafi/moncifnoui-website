const mongoose = require('mongoose')
const Product = require('../DDL/productSchema')
const uri = "mongodb+srv://Amir:amirMoncifDatabase@e-commerce.cwb7b.mongodb.net/products?retryWrites=true&w=majority";

exports.editCard = data => {
    return new Promise((resolve, reject) => {
        mongoose.connect(uri, {dbName: 'products'})
        .then(() => Product.updateOne(
            {_id: data.id},
            {
                title: data.title,
                type1: data.type1,
                type1: data.type2,
                isExist: data.isExist,
                ref: data.ref,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice
            }
        ))
        .then(result => {
            resolve(result)
            mongoose.disconnect()
        })
        .catch(error => {
            reject(error)
            mongoose.disconnect()
        })
    })
}