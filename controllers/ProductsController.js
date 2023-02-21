

const ProductsController = {};

ProductsController.getAllProducts = async (req,res) => {

    let products = {
        producto1 : "croissants",
        producto2 : "pan quemado",
        producto3 : "pan centeno"
    }

    res.send(products);
}

module.exports = ProductsController;