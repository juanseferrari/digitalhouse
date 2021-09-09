const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const product = products.find((prod) => {
			return prod.id == req.params.id
			
		})
		console.log(product)
		res.render("detail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
		const lastProduct = products[products.length - 1]
		const biggestproductId = products.length > 0 ? lastProduct.id : 1;
		const product = {
			id: biggestproductId + 1,
			...req.body, // Esto es un spread operator. Te trae toda la info de body y te lo pone en una variable con el mismo nombre que viene.
			price: Number(req.body.price),
			discount: Number(req.body.discount),
			image: req.file ? req.file.filename : "default-image.png"
		};
		products.push(product)
		const jsonString = JSON.stringify(products,null,4)
		fs.writeFileSync(productsFilePath,jsonString)
		res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;