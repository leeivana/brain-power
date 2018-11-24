import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const administratorSchema = new Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true }
});

export default mongoose.model('Administrator', administratorSchema);
