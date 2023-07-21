let persons = [
    {
        sno : 1,
        name : 'jayakrishna',
        age : 22,
     },
     {
        sno : 2,
        name : 'srinivas',
        age : 25,
     },
     {
        sno : 3,
        name : 'thurupathi',
        age : 24,
     },
     {
        sno : 4,
        name : 'rajesh',
        age : 24,
     }
   ]

console.log(persons)
// console.log(persons);

// adding key to the array of objects
// persons[0].exepereince = "6 onths";
// console.log(persons);

// persons[1].exepeeince = "2 years"
// console.log(persons)

// persons[2].exepeeince = "1 yrear"
// console.log(persons)

// persons[2].company = "culinda";
// console.log(persons)

   //delete the key from the object

// delete persons[1].sno;
// console.log(persons)
//

      // edit the key 

// persons[1].sno = "3";
// console.log(persons);

// persons[3].name = "rithik roshan";
// console.log(persons[3])

      //inserting an object into an array

// persons.push({
//    no : 22,
//    name : 'salman',
//    employee : true
// });
// console.log(persons);

// persons.push({
//    name : "prabhas",
//    proffession : "actor",
//    loction : "hyderbad",
//    movie : "salar"
// });
// console.log(persons);

      //adding an object in first

// const InesertArray = {
//    name : "vamsi madanabeti",
//    age : 23,
//    location : "kotha kaluba"
// }

// persons.splice(0, 0, InesertArray);
// console.log(persons);

     //add a new objet  in between two objects

// let middleArray = {
//    no : 3,
//    name : "thalari rajesh",
//    proffession : "jr.software engineer",
//    location : "hitech city hyd"
// }
// persons.splice(3 , 0, middleArray);
// console.log(persons)

      //add a new key to the all the objects 

// persons.unshift('name : jay');
// console.log(persons)


     //add a new key-value to the all the objects

// for(let i = 0; i<persons.length; i++){
//    persons[i].city = "hyderabad"
// };
// console.log(persons)


     //delete a key value from all the objects

// for(let i=0; i<persons.length; i++){
//    delete persons[i].city;
//      }
// console.log(persons)

     //add a key value to a specific obbbject

// persons[2].martialStatus = "un-married"
// console.log(persons)
      

      //delete the object from the array
      // let snoToRemove = 3;

      // for (let i = 0; i < persons.length; i++) {
      //   if (persons[i].sno === snoToRemove) {
      //     persons.splice(i, 1);
      //     break;       // Exit the loop after removing the object
      //   }
      // }
      
      // console.log(persons);


      // let iremsRemoved = 25;

      // for(let i=0; i<persons.length; i++){
      //    if(persons[i].age === iremsRemoved){
      //       persons.splice(i, 1)
      //       break;
      //    }
      // }
      // console.log(persons)
       

      //deleting the all the objects from the array

      // for(let i=0; i<persons.length; i++){
      //    for(let key in persons[i]){
      //       delete persons[i][key];
      //    }
      // }
      // console.log(persons)
     
      // deleteing the specific object from the arry 

    //   keyDelete = "sno"
    //   valueDelete = 1

    //   const newArry = persons.filter((item) => item[keyDelete] !== valueDelete);
    //   console.log(newArry)
      


      // let products = [
      //    {
      //       item : "canon",
      //       price: 23000,
      //       mfg : 2023
      //    },
      //    {
      //       item : "lg",
      //       price: 23000,
      //       mfg : 2023
      //    },
      //    {
      //       item : "lenivo",
      //       price: 23000,
      //       mfg : 2023
      //    }

      // ]

      // filterItems = products.filter((product) => product.item.startsWith('c'))
      // console.log(filterItems);

      // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // let filterNumbers = numbers.filter((number) => number % 2 === 0);
      // console.log(filterNumbers);

      // let results = [
      //    { name: 'Apple', price: 0.99 },
      //    { name: 'Banana', price: 0.5 },
      //    { name: 'Orange', price: 1.5 },
      //    { name: 'Mango', price: 2.0 },
      //    { name: 'Grapes', price: 3.5 }
      // ]

      // let filterResults = results.filter((result) => result.price >= 0.5 && result.price <= 3.0);
      // console.log(filterResults);



   //    let studentsMraks = [38, 36, 47, 78, 88, 22];
   //   filterStudents = studentsMraks.filter((mark) => mark >= 35 && mark <=100);
   //   console.log(filterStudents);
