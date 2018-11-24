import Student from '../models/student';

export function getStudents(req, res) {
  Student.find().exec((err, students) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ students });
  });
}



