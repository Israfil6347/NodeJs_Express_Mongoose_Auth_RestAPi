const mapRequestToColorModel = (data) => {
    return {
        colorCode: data.color_code,
        colorName: data.color_name,
       
    };
};

// Function to map category model to response format
const mapColorModelToResponse = (data) => {
    return {
        color_code: data.colorCode,
        color_name: data.colorName,
     
    };
};

module.exports = {
    mapRequestToColorModel,
    mapColorModelToResponse
};