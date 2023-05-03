const express  = require("express");
const router = express.Router();

//import controllers
const {addEmp} = require("../controllers/addEmp");
const {deleteEmp} =  require("../controllers/deleteEmp");
const {getEmps, getEmpById} = require("../controllers/getEmps");
const {updateEmp} = require("../controllers/updateEmp");


//define APi routes
router.post("/addEmp", addEmp); 
//http://localhost:4000/api/v1/addEmp

router.delete("/deleteEmp/:id", deleteEmp); 
//http://localhost:4000/api/v1/deleteEmp/645227bed3cd935bdc14a968

router.get("/getEmps", getEmps); 
//http://localhost:4000/api/v1/getEmps

router.get("/getEmpById/:id", getEmpById); 
//http://localhost:4000/api/v1/getEmpById/64521ce31d313f5b66f3ebeb

router.put("/updateEmp/:id", updateEmp);
//http://localhost:4000/api/v1/updateEmp/64521ce31d313f5b66f3ebeb

module.exports = router;