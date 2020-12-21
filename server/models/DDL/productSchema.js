const mongoose = require('mongoose')

// *** set the DDL *** //
const bookSchema = mongoose.Schema({
	title: String,
	stars: Number,
	image: String,
	dateStart: String,
	type1: String,
	type2: String,
	sortByDate: Number,
	isExist: Boolean,
	ref: Number,
	newPrice: Number,
	oldPrice: Number,
	desc: String,
	cloudinary_id: String,
})

// ** mongoose configurations ** //
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('product', bookSchema)
