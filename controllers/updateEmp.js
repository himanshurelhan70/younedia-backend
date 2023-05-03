//import th model
const Employee = require("../models/Employee");

//define route handler
exports.updateEmp = async(req,res) => {
    try {
        const {id} = req.params;
        const {name, departments, salary} = req.body;

        const updatedEmp = await Employee.findByIdAndUpdate(
            {_id:id},
            {
                name,
                departments, 
                salary
            },
            {new: true}
        )

        res.status(200).json({
            success:true,
            data:updatedEmp,
            message: `Employee data Updated Successfully`,
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
