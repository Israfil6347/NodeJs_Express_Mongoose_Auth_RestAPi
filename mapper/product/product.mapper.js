const mapRequestToProductModel = (data) => {
    return {
        productId: data.product_id,
        productName: data.product_name,
        productQty: data.product_qty,
        productDescription: data.product_description,
        productStatus: data.product_status,
        createUser: data.create_user,
    };
};

// Function to map category model to response format
const mapProductModelToResponse = (data) => {
    return {
        product_id: data.productId,
        product_name: data.productName,
        product_qty: data.productQty,
        product_description : data.productDescription,
        product_status : data.productStatus,
        create_user : data.createUser,
    };
};

module.exports = {
    mapRequestToProductModel,
    mapProductModelToResponse
};