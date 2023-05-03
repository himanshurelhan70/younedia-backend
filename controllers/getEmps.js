//import th model
const Employee = require("../models/Employee");

//define route handler
exports.getEmps = async(req,res) => {
    try {
            //fetch all Employees from database
            const emps = await Employee.find({});

            //response
            res.status(200)
            .json({
                success:true,
                data:emps,
                message:"All Employees Data is fetched",
            });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
       
    }
}


exports.getEmpById = async(req, res) => {
    try {
       //extract Employee details of a specific record
       const id = req.params.id;
       const emp = await Employee.findById( {_id: id})

       //data forgiven id not found
       if(!emp) {
        return res.status(404).json({
            success:false,
            message:"No Data Found with Given Id",
        })
       }
       //data for given id FOUND
       res.status(200).json({
        success:true,
        data:emp,
        message: `Employee with id=${id} data successfully fetched`,
       })

    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    
    }
}
