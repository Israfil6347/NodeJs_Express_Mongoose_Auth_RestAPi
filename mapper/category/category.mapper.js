const mapRequestToCategoryModel = (data) => {
    return {
        categoryName: data.category_name,
    };
};

// Function to map category model to response format
const mapCategoryModelToResponse = (category) => {
    return {
        category_id:category.categoryId,
        category_name: category.categoryName,
    };
};

module.exports = {
    mapRequestToCategoryModel,
    mapCategoryModelToResponse
};