import Classes from '../models/class';


//gets all classes
export function getClasses(req, res) {
  Classes.find().exec((err, classes) => {
    if(err){
     res.status(500).send(err);
    }
    res.json({ classes });
  });
}
