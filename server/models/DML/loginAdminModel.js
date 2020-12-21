const mongoose = require('mongoose')
const Admin = require('../DDL/adminSchema')
const uri = "mongodb+srv://Amir:amirMoncifDatabase@e-commerce.cwb7b.mongodb.net/products?retryWrites=true&w=majority";

exports.loginAdminModel = (data) => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(uri, { dbName: 'products' })
			.then(() => Admin.findOne({ adminname: data.adminname }))
			.then((result) => {
				if (result) {
					if (result.password === data.password) {
						resolve(result)
						mongoose.disconnect()
					} else {
						reject('Wrong Email or Password!')
						mongoose.disconnect()
					}
				} else {
					reject('No Admin Found!')
					mongoose.disconnect()
				}
			})
			.catch((error) => {
				reject(error)
				mongoose.disconnect()
			})
	})
}
