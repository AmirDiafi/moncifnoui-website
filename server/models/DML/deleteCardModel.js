const mongoose = require('mongoose')
const Product = require('../DDL/productSchema')
const uri = "mongodb+srv://Amir:amirMoncifDatabase@e-commerce.cwb7b.mongodb.net/products?retryWrites=true&w=majority";

exports.removeCard = (id) => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(uri, { dbName: 'products' })
			.then(() => Product.findByIdAndRemove(id))
			.then((result) => {
				resolve(result)
				mongoose.disconnect()
			})
			.catch((error) => {
				reject(error)
				mongoose.disconnect()
			})
	})
}
