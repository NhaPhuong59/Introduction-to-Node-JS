
const express = require("express");
const router = express.Router();
const fs = require("fs")

let response
try {
    const db = fs.readFileSync("db.json","utf8")
    response = JSON.parse(db);
    // console.log(response)
} catch (error) {
    console.log(error)
}
// const {data}=response



/* GET students. */
router.get("/", function (req, res, next) {

  return res.status(200).send({data:response, message:"get from data"});
});
router.post("/", function (req, res, next) {
  return res.status(200).send({data:{}, message:"posting"});
});

/* GET students. */
router.get("/:id", function (req, res, next) {
  const {id} = req.params
  const message = `Get single student by id ${id}`
  const selectedStudent= response.find((student)=>student.id===id)
  if(!selectedStudent){
    message = "Student with given ID is not found"
  }
  return res.status(200).send({ data: selectedStudent || {}, message});
});

module.exports = router;
