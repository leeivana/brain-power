import Class from './models/class';

export default function () {
  Class.count().exec((err, count) => {
    if(count > 0) {
      return;
    }

    const class1 = new Class({name: 'AP Physics', teacher_id: [1,2,3,4], student_ids: ['5bf8daaa7a8b2a6913b1b6fd', '5bf8fbbbd787d0715de18765'], start_time: '16:45', end_time: '18:45', day_of_week: 'Sun', admin_id: [1,2,3]});

    Class.create([class1], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
