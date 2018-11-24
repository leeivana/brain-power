import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const attendSchema = new Schema({
  student_id: {type: 'Array', required: true},
  attendance_id: {type: 'Array', required: true},
  extra_info: {type: 'Array', required: false},
  attendance_history: {type: 'Array', required: true},
});

export default mongoose.model('Attend', attendSchema);
