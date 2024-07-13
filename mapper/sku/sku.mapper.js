const mapRequestToSKUModel = (data) => {
    return {
        // SKU: data.sku,
        price: data.price,
        Qty: data.qty,
        color: data.color,
        productImage: data.product_image,
        otherImage: data.other_image,
        productId: data.product_id,
        expireDate: data.expire_date,     
    };
};

// Function to map category model to response format
const mapSKUModelToResponse = (data) => {
    return {
        // sku : data.SKU,
        price: data.price,
        qty: data.Qty,
        color: data.color,
        product_image: data.productImage,
        other_image: data.otherImage,
        product_id: data.productId,
        expire_date: data.expireDate,
    };
};

module.exports = {
    mapRequestToSKUModel,
    mapSKUModelToResponse
};