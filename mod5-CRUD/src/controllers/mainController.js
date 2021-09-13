const fs = require('fs');
const path = require('path');

const productService = require('../services/products-service')
 

const controller = {
	index: (req, res) => {
		// Do the magic
		const filteredProducts = productService.findAll();
		//mostramos en dos arrays, uno de destacados y otro en oferta
		const visitedProducts = productService.filterByCategory("visited")
		const inSaleProducts = productService.filterByCategory("in-sale")

		//renderizar
		res.render("index", {visitedProducts, inSaleProducts})

	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
