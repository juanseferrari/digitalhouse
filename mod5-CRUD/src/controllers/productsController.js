const fs = require('fs');
const path = require('path');

const productService = require('../services/products-service')

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const filteredProducts = productService.findAll();
		res.render("products", {products: filteredProducts})
		
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = productService.findOneById(req.params.id)
		res.render("detail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		productService.createOne(req.body, req.file)
		res.redirect("/products")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const product = productService.findOneById(req.params.id)
		res.render("product-edit-form",{product})

	},
	// Update - Method to update
	update: (req, res) => {
		const product = productService.editOne(req.params.id, req.body,req.file)
		res.redirect("/products/" + req.params.id)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		productService.destroyOne(req.params.id);
		res.redirect("/products")

	}
};

module.exports = controller;