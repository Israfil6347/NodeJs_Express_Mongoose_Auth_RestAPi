const { mapColorModelToResponse, mapRequestToColorModel } = require("../../mapper/color/color.mapper");
const Color = require("../../models/colorModel/color.model");
const validateColor = require("../../validation/color/validate.Color");

const postColorController =async(req, res)=>{

    try {
        const colorData = mapRequestToColorModel(req.body)

        const { error } = validateColor(colorData)
        
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const existingColor = await Color.findOne({colorName: colorData.colorName})

        if(existingColor ){
              return res.status(201).send("user already created");
        }

        const newColor = new Color({
            colorCode: colorData.colorCode,
            colorName: colorData.colorName,
        })

        const savedColor = await newColor.save();

          res.send({
            message: "color created successfully",
            data: mapColorModelToResponse(savedColor)
        });
    } catch (error) {
        res.status(500).send(error.message);
    }

}

const getColorController =async(req, res)=>{

    const getAllColor = await Color.find()


    const response = getAllColor.map(mapColorModelToResponse);

    res.status(200).json(response);

    // console.log("first")
}

module.exports= {postColorController,getColorController}