const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxLength:50,
        },
        departments: {
            type:String,
            required:true,
            maxLength:200,
        },
        salary:{
            type: String,
            required:true,
        },
    }
);

module.exports = mongoose.model("Employee", employeeSchema);