const express = require("express");
const fs = require("fs");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return res.status(200).send({key: "value"});
});

router.post("/reqdemo", function (req, res, next) {
  const params =req.params;
  const query =req.query;
  const body =req.body;

  return sendResonse ;
});

const studentRoutes = require("./student.api.js");
router.use("/students", studentRoutes);

// const userRoutes = require("./user.api.js");
// router.use("/users", userRoutes);

module.exports = router;
