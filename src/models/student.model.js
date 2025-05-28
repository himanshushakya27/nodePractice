const mongoose = require('mongoose');
//const validator = require('validator');
const bcrypt = require('bcryptjs');
// const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      // validate(value) {
      //   if (!validator.isEmail(value)) {
      //     throw new Error('Invalid email');
      //   }
      // },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      // validate(value) {
      //   if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
      //     throw new Error('Password must contain at least one letter and one number');
      //   }
      // },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
     // enum: roles,
      default: 'student',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// studentSchema.statics.isEmailTaken = async function (email, excludeStudentId) {
//   const student = await this.findOne({ email, _id: { $ne: excludeStudentId } });
//   return !!student;
// };

// studentSchema.methods.isPasswordMatch = async function (password) {
//   const student = this;
//   return bcrypt.compare(password, student.password);
// };

// studentSchema.pre('save', async function (next) {
//   const student = this;
//   if (student.isModified('password')) {
//     student.password = await bcrypt.hash(student.password, 8);
//   }
//   next();
// });

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
