import mongoose from "mongoose";
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  date_of_attendance: { type: "Date", default: new Date(), required: true },
  time_of_submission: { type: "Timestamp", required: true },
  time_updated: { type: "Timestamp", required: false }
});

export default mongoose.model("Attendance", attendanceSchema);
