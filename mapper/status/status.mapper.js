const mapRequestToStatusModel = (data) => {
    return {
        statusCode: data.status_code,
        statusName: data.status_name,
       
    };
};

// Function to map category model to response format
const mapStatusModelToResponse = (data) => {
    return {
        status_code: data.statusCode,
        status_name: data.statusName,
     
    };
};

module.exports = {
    mapRequestToStatusModel,
   mapStatusModelToResponse
};