const express = require("express");
const { Service } = require("./schema");
const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { serviceName, description, price } = req.body;

        if (!serviceName || !description || !price) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }
        const isPresent = await Service.findOne({ serviceName });

        if (isPresent) {
            return res.status(409).json({
                success: false,
                message: "Service has already been created"
            })
        }

        const service = new Service({
            serviceName,
            description,
            price
        })

        await service.save();

        res.status(201).json({
            success: true,
            message: 'Service created'
        })
    }
    
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while creating service"
        });
    }
});

router.get("/get-all", async (req, res) => {
    try {
        const services = await Service.find();

        return res.status(200).json({
            success: true,
            message: "All services fetched",
            services
        })
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while fetching services"
        })
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceName, description, price } = req.body;

        const service = await Service.findByIdAndUpdate(
            {
                _id: id
            },
            {
                serviceName,
                description,
                price,
            }
        );

        res.status(200).json({
            success: true,
            message: "Update successful",
            service
        })
    }

    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while updating the service"
        })
    }
});

router.delete("/remove/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Service.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Service deletion successful"
        });
    }

    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error while removing the service"
        });
    }
})


module.exports = { router };