//import th model
const Employee = require("../models/Employee");

//define route handler

exports.deleteEmp = async(req,res) => {
    try {
        const {id} = req.params;

        await Employee.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Employee DELETED",
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
