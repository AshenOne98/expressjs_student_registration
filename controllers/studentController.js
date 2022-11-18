const Student = require("../models/student");
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];

const stud_index = (req, res) => {
  Student.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      //   console.log(result);
      res.render("students/index", {
        title: "Student List",
        subtitle: "All Student",
        students: result,
      });
    })
    .catch((err) => console.log(err));
};

const stud_create_get = (req, res) => {
  res.render("students/create", {
    title: "Create Student",
    subtitle: "Add New Student",
  });
};

const stud_create_post = (req, res) => {
  //   console.log(req.body);

  const studData = {
    studName: req.body.studName,
    matricNum: req.body.matricNum,
    studTel: req.body.studTel,
    studGender: req.body.studGender,
    studClass: req.body.studClass,

    parents: {
      fatherName: req.body.fatherName,
      fatherTel: req.body.fatherTel,
      motherName: req.body.motherName,
      motherTel: req.body.motherTel,
    },
    emergencyContact: {
      eciName: req.body.eciName,
      eciRelation: req.body.eciRelation,
      eciTel: req.body.eciTel,
    },
  };

  saveCover(studData, req.body.studPhoto);
  const stud = new Student(studData);

  stud
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

const stud_details = (req, res) => {
  const id = req.params.id;
  console.log("blogs id: " + id);

  Student.findById(id)
    .then((result) => {
      // console.log(result);
      return res.render("students/details", {
        student: result,
        title: "Student Details",
        subtitle: "Student Details",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).render("404", { title: "Blog Not Found" });
    });
};

function saveCover(stud, photoEncoded) {
  if (photoEncoded == null) return;
  const image = JSON.parse(photoEncoded);

  if ((image != null) & imageMimeTypes.includes(image.type)) {
    stud.studImage = new Buffer.from(image.data, "base64");
    stud.studImageType = image.type;
  }
}

module.exports = {
  stud_index,
  stud_create_get,
  stud_create_post,
  stud_details,
};
