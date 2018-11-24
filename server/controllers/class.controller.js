import Classes from '../models/class';
import Students from '../models/student';


//gets all classes
export function getClasses(req, res) {
  Classes.find().exec((err, classes) => {
    if(err){
     res.status(500).send(err);
    }
    res.json({ classes });
  });
};

//Get a specific class at a given _id
export function getClass(req, res) {
  Classes.findOne({_id: req.params._id}).exec((err, className) => {
    if(err){
      res.status(500).send(err);
    }
    res.json({className});
  });
};

//Get list of student ids in class
export function getStudentsInClass(req, res) {
  Classes.find({student_ids: {$elemMatch: {$eq: req.params._id}}}).exec((err, students) => {
    if(err){
      res.status(500).send(err);
    }
    res.json({students});
  });
};





 // const student_ids = Classes.find({student_ids}).toArray();
 //  Students.find({_id: {$elemMatch: {student_ids}}});


// const classSchema = new Schema({
//   name: { type: 'String', required: true },
//   student_ids: {type: 'Array', required: true},
//   teacher_id: { type: 'Array', required: true },
//   start_time: { type: 'String', required: true },
//   end_time: { type: 'String', required: true },
//   day_of_week: { type: 'String', required: true },
//   admin_id: { type: 'Array', required: true }
// });
