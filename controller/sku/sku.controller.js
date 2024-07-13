const { mapSKUModelToResponse, mapRequestToSKUModel } = require("../../mapper/sku/sku.mapper");
const Color = require("../../models/colorModel/color.model");
const SKU = require("../../models/skuModel.js/sku.model");
const validateSKU = require("../../validation/sku/validate.sku");
const { v4: uuidv4 } = require("uuid");

const getSkuController = async(req, res)=>{

    const skuData = await SKU.find()

    const response = skuData.map(mapSKUModelToResponse);

    res.status(200).json(response);
}
const postSkuController = async(req,res)=>{

    const skuData = mapRequestToSKUModel(req.body)

    const { error } = validateSKU(skuData)

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const colorData = await Color.findOne({_id: skuData.color})

    const newSkuData = new SKU({
        SKU : uuidv4(),
        price : skuData.price,
        Qty : skuData.Qty,
        color : [{
            colorCOde: colorData.colorCode,
            colorName: colorData.colorName
        }],
        productImage:  skuData.productImage,
        otherImage:  skuData.otherImage,
        productId:  skuData.productId,
        expireDate: skuData.expireDate
    })
    const savedSKU = await newSkuData.save();
    res.send({
        message: "SKU is created successfully",
        data: mapSKUModelToResponse(savedSKU)
    });
    

}

module.exports = {getSkuController,postSkuController}