import Student from './models/student';

export default function () {
  Student.count().exec((err, count) => {
    if(count > 0) {
      return;
    }

    const student1 = new Student({ name: 'Bob', email: 'hi@gmail.com', phonenumber: '1231231234', photo_url: 'null', allergies: 'peanuts', need_epipen: true});
    const student2 = new Student({ name: 'Jill', email: 'hi@gmail.com', phonenumber: '1231231234', photo_url: 'null', allergies: 'peanuts', need_epipen: true});
    const student3 = new Student({ name: 'Jane', email: 'hi@gmail.com', phonenumber: '1231231234', photo_url: 'null', allergies: 'peanuts', need_epipen: true});

    Student.create([student1, student2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
