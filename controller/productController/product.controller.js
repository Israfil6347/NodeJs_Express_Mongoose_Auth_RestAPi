const { mapRequestToProductModel, mapProductModelToResponse } = require("../../mapper/product/product.mapper")
const Category = require("../../models/categoryModel/category.model")
const Product = require("../../models/productModel/produce.model");
const Status = require("../../models/statusModel/status.model");
const validateProduct = require("../../validation/product/validate.product")
const { v4: uuidv4 } = require("uuid");
const getProductController=async (req, res)=>{

    const getProduct = await Product.find() 

    const response = getProduct.map(mapProductModelToResponse);

    res.status(200).json(response);
}
const postProductController = async (req,res)=>{
    try {
        const ProductData = mapRequestToProductModel(req.body)
        
        const { error } = validateProduct(ProductData)
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const addStatus = await Status.findOne({_id: ProductData.status} )

        const product  =new Product({
            productId : uuidv4(),
            productName: ProductData.productName,
            productQty: ProductData.productQty,
            productDescription: ProductData.productDescription,
            productStatus: {
                statusCode: addStatus.statusCode,
                statusName:addStatus.statusName
            },
            createUser: req.user.id,
        })
        const savedProduct = await product.save();
         res.send({
            message: "Product is created successfully",
            data: mapProductModelToResponse(savedProduct)
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}



module.exports= {postProductController,getProductController}