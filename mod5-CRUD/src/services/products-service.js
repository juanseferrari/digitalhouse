const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productService = {
	findAll(){
		const filteredProducts = products.filter((prod) => {
			return !prod.deleted
		})
		return filteredProducts;
	},
	filterByCategory(category){
		return this.findAll().filter((prod) => {
			return prod.category == category
		})
	},
    findOneById(id){
        return products.find((prod) => {
			return prod.id == id
		})
    },
    createOne(payload, image){
        const lastProduct = products[products.length - 1]
		const biggestproductId = products.length > 0 ? lastProduct.id : 1;
		const product = {
			id: biggestproductId + 1,
			...payload, // Esto es un spread operator. Te trae toda la info de body y te lo pone en una variable con el mismo nombre que viene.
			price: Number(payload.price),
			discount: Number(payload.discount),
			image: image ? image.filename : "default-image.png"
		};
        products.push(product);
        this.save();
    },
    editOne(id, payload, image){
        const product = this.findOneById(id)

		product.name = payload.name;
		product.price = payload.price;
		product.discount = payload.discount;
		product.description = payload.description;
		product.category = payload.category;
		product.image = image ? image.filename : product.image

		this.save();
    },
	destroyOne(id){
		const product = this.findOneById(id);
		product.deleted = true;
		this.save();
	},


    save(){
        const jsonString = JSON.stringify(products,null,4)
		fs.writeFileSync(productsFilePath,jsonString)
    },

}
module.exports = productService