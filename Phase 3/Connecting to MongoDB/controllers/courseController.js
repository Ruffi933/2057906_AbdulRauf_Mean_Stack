const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Course = mongoose.model("Course");

router.get("/", (req, res) => {
  res.render("course/addOrEdit", {
    viewTitle: "Insert Course",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  var course = new Course();
  course.courseid = req.body.courseid;
  course.coursename = req.body.coursename;
  course.description = req.body.description;
  course.amount = req.body.amount;
  course.save((err, doc) => {
    if (!err) res.redirect("course/list");
    else {
      if (err.name == "ValidationError") {
        handleValidationError(err, req.body);
        res.render("course/addOrEdit", {
          viewTitle: "Insert Course",
          course: req.body,
        });
      } else console.log("Error during record insertion : " + err);
    }
  });
}

function updateRecord(req, res) {
  Course.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("course/list");
      } else {
        if (err.name == "ValidationError") {
          handleValidationError(err, req.body);
          res.render("course/addOrEdit", {
            viewTitle: "Update Course",
            course: req.body,
          });
        } else console.log("Error during record update : " + err);
      }
    }
  );
}

router.get("/list", (req, res) => {
  Course.find((err, docs) => {
    if (!err) {
      res.render("course/list", {
        list: docs,
      });
    } else {
      console.log("Error in retrieving course list :" + err);
    }
  });
});

function handleValidationError(err, body) {
  for (field in err.errors) {
    switch (err.errors[field].path) {
      case "fullName":
        body["fullNameError"] = err.errors[field].message;
        break;
      case "email":
        body["emailError"] = err.errors[field].message;
        break;
      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  Course.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("course/addOrEdit", {
        viewTitle: "Update Course",
        course: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Course.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/course/list");
    } else {
      console.log("Error in course delete :" + err);
    }
  });
});

module.exports = router;
