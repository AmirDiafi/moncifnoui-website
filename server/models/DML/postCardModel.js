const mongoose = require('mongoose')
const Product = require('../DDL/productSchema')
const uri = "mongodb+srv://Amir:amirMoncifDatabase@e-commerce.cwb7b.mongodb.net/products?retryWrites=true&w=majority";

exports.postCard = (data, result) => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(uri, { dbName: 'products' })
			.then(() => {
				const newProduct = new Product({
					title: data.title,
					stars: data.stars,
					image: result.secure_url,
					cloudinary_id: result.public_id,
					type1: data.type1,
					type2: data.type2,
					dateStart: new Date().toDateString(),
					sortByDate: new Date(),
					isExist: data.isExist,
					ref: data.ref,
					oldPrice: data.oldPrice,
					newPrice: data.newPrice,
					desc: data.desc,
				})
				return newProduct.save()
			})
			.then((newProduct) => {
				resolve(newProduct)
				mongoose.disconnect()
			})
			.catch((error) => {
				reject(error)
				mongoose.disconnect()
			})
	})
}
