const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studName: {
      type: String,
      required: true,
    },
    matricNum: {
      type: String,
      required: true,
    },
    studTel: {
      type: String,
      required: true,
    },
    studGender: {
      type: String,
      required: true,
    },
    studClass: {
      type: String,
      required: true,
    },
    studImage: {
      type: Buffer,
      required: true,
    },
    studImageType: {
      type: String,
      required: true,
    },

    parents: {
      fatherName: {
        type: String,
        required: true,
      },
      fatherTel: {
        type: String,
        required: true,
      },
      motherName: {
        type: String,
        required: true,
      },
      motherTel: {
        type: String,
        required: true,
      },
    },

    emergencyContact: {
      eciName: {
        type: String,
        required: true,
      },
      eciRelation: {
        type: String,
        required: true,
      },
      eciTel: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

studentSchema.virtual("studImagePath").get(function () {
  if (this.studImage != null && this.studImageType != null) {
    return `data:${
      this.studImageType
    };charset=utf-8;base64,${this.studImage.toString("base64")}`;
  }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
