//Object

// const person = {
//   name: 'Alice',
//   age: 30,
//   nameOfPerson: function (){
//     console.log('Hello,' + this.name)
//   }
// }
// person.nameOfPerson()


// hands on assignment
// 1.
const student = {
   name:'Oluwole',
   age: 41,
   grade: 'A',
   studentProperty: function(){
     console.log('student name: ' + this.name)
     console.log('student age: ' + this.age)
     console.log('student grade: ' + this.grade)
     document.write('student name: ' + this.name, ' ' + 'student age: ' + this.age, ' ' + 'student grade: ' + this.grade)
   }
}
student.studentProperty()

// 2.
const person = {
  name: prompt ('enter your name'),
  age: parseInt( prompt ('enter your age')),
  city: prompt ('enter name of your city'),
  personDetails: function(){
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
  }
}
person.personDetails()
person.age= 'age' + 1
person.country='Nigeria';
console.log(person.country)

// 3.
const fruit = {
  name: 'Pawpaw',
  color: 'Yellow',
  taste: 'plain',
  fruitDetails: function(){
     console.log(this.name)
     console.log(this.color)
     console.log(this.taste)
  }
}
delete fruit.taste
fruit.fruitDetails()

//Loop through Arrays inside Object

const book = {
  title: 'Javascript Basics',
  author: 'Mrs Ib',
  year: 2024
}
let output = '';

for (let key in book){
     output = output + key + ':' + book[key] + '<br>';
}
document.getElementById("output").innerHTML = output;



















































// console.log('Hello World');

// let person = {
//     name: 'Wole',
//     age: 30
// };
// console.log(person);

// let selectedColors = ['red', 'blue', 'green'];
// console.log(selectedColors[0]);

// //learning about if...else && Switch...case

// // Hour
//     //if hour is between 6am and 12pm: Good morning!
//     // if it is between 12pm and 6pm: Good afternoon!
//     // otherwise: Good evening!
    
//     var hour = 7;

//     if (hour >= 6 && hour < 12) 
//         document.write('Good morning');
//     else if (hour >= 12 && hour < 18) 
//         document.write('Good afternoon');
//     else 
//         document.write('Good evening');

        


    