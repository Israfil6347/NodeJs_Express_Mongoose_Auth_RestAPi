const { mapStatusModelToResponse, mapRequestToStatusModel } = require("../../mapper/status/status.mapper");
const Status = require("../../models/statusModel/status.model");
const validateStatus = require("../../validation/status/validate.Status");

const getStatusController =async(req, res)=>{

    const  getAllStatus = await Status.find()

    const response = getAllStatus.map(mapStatusModelToResponse);

        res.status(200).json(response);

};

const postStatusController= async(req,res)=>{

    const statusData  = mapRequestToStatusModel(req.body)

    const { error } = validateStatus(statusData)

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const existingStatus = await Status.findOne({statusName: statusData.statusName})

    if(existingStatus ){
            return res.status(201).send("Status already created");
    }
    const productCount = await Status.countDocuments();

    const newStatus = new Status({
        statusCode: productCount+1,
        statusName: statusData.statusName
    })
    const savedStatus = await newStatus.save();

    res.send({
        message: "status created successfully",
        data: mapStatusModelToResponse(savedStatus)
    });
} 



module.exports= {getStatusController,postStatusController}