const mapRequestToProductModel = (data) => {
    return {
        productId: data.product_id,
        productName: data.product_name,
        productPrice: data.product_price,
        headingImage: data.heading_image,
        productQty: data.product_qty,
        productDescription: data.product_description,
        categoriesId: data.categories_id,
        productStatus: data.product_status,
        productColor: data.product_color,
        otherImage: data.other_image,
        createUser: data.create_user,
    };
};

// Function to map category model to response format
const mapProductModelToResponse = (data) => {
    return {
        product_id: data.productId,
        product_name: data.productName,
        product_price: data.productPrice,
        heading_image: data.headingImage,
        product_qty: data.productQty,
        product_description : data.productDescription,
        category : data.category[0],
        product_status : data.productStatus,
        product_color: data.productColor,
        other_image : data.otherImage,
        create_user : data.createUser,
    };
};

module.exports = {
    mapRequestToProductModel,
    mapProductModelToResponse
};