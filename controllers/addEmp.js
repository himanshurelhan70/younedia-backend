//import th model
const Employee = require("../models/Employee");

//define route handler

exports.addEmp = async(req,res) => {
    try {
            //extract name, departments and salary from request body
            const {name, departments, salary} = req.body;

            //create a new Employee Obj and insert it in DB
            const response = await Employee.create({
                name,
                departments,
                salary
            });


            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
