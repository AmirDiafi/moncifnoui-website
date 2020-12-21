const mongoose = require('mongoose')
const Product = require('../DDL/productSchema')
const uri = "mongodb+srv://Amir:amirMoncifDatabase@e-commerce.cwb7b.mongodb.net/products?retryWrites=true&w=majority";

// ** set the DML ** //
exports.getCards = () => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(uri, { dbName: 'products' })
			.then(() => Product.find({}, {}, { sort: { sortByDate: -1 } }))
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

exports.getCardByRef = (ref) => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(uri, { dbName: 'products' })
			.then(() => Product.findOne({ ref: ref }))
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
