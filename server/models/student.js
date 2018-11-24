import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  phonenumber: { type: "Integer", required: true },
  class_ids: { type: "Array", required: true },
  allergies: { type: "String", required: false },
  need_epipen: { type: "Boolean", required: true }
});

export default mongoose.model("Student", studentSchema);
