import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: 'String', required: true },
  teacher_id: { type: 'Array', required: true },
  start_time: { type: 'Integer', required: true },
  end_time: { type: 'Integer', required: true },
  day_of_week: { type: 'String', required: true },
  admin_id: { type: 'Array', required: true }
});

export default mongoose.model('Class', classSchema);
