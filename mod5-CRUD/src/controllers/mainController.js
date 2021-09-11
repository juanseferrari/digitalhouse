const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
 

const controller = {
	index: (req, res) => {
		// Do the magic
		//mostramos en dos arrays, uno de destacados y otro en oferta
		const visitedProducts = products.filter((prod) => {
			return prod.category == "visited"
		})
		const inSaleProducts = products.filter((prod) => {
			return prod.category == "in-sale"
		})

		//renderizar
		res.render("index", {visitedProducts, inSaleProducts})

	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
