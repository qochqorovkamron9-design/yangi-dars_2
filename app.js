// let numbers = [1, 2, 3, 4, 5];

// numbers.pop();
//  numbers.push(10);

//  let doubled = numbers.map(n => n * 2);

//  let filtered = numbers.filter(n => n > 2);

//  let sum = numbers.reduce((sum, n )=> sum + n, 0)

//  console.log('Doubled:', doubled);
//  console.log('Filtered:', filtered);
//  console.log("Reduced:", sum)
 
// let topish = [-3, 4, -2, 7, 1];

// let mus= topish.filter(n => n > 0);

// let sum = mus.reduce((sum, n)=> sum + n,0 )

// console.log(mus)
//  console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6];

// let red =  arr.filter(n => n % 2 == 0);

// let juftlar = red.map(n => n * 2);

// console.log(juftlar )


// let numbers =  [1,2,3,4,5,6,7,8,9]
// let toqlar = [1,3,5,7,9]

// let finder =  numbers.find(n => n ===2);
// let even =  numbers.some(n => n % 2 === 0);
// let odd = toqlar.every(n => n % 2 ===1);

// let filter =  numbers.filter(n => n % 2 ===1);

// console.log(finder);
// console.log(even);
// console.log(filter.length);
// console.log(odd);          

// let names = [
//     "jfvnj",
//     "lkm lsdkmj",
//     "jncekdjcn",
//     "ejnfkcej",
//     "jdncdjc",
//     "lkdj",
//     "ld nldfkmnj",
//     "kdjncjncj"
// ];

// let sorted = names.sort();
// console.log(sorted);

// let sonlar = [1,4,65,987,76543,123456];

// let osish = sonlar.sort((a,b) => a - b);
// let kamayish = sonlar.sort((a,b) => b-a);

// console.log(osish)

// sonlar.forEach((val, i) => {
// console.log(val, i);
// });

// let names = ["Ali", "Sardor", "John", "Vali", "Muhammad"];

// let result = names.filter(name => name.length > 5) 
// result.sort();                        

// console.log(result); 

// let nums = [5, 12, 7, 20];

// let somem = nums.some(n => n > 10);

// if (somem){
//    let yangidan = nums.filter(n => n> 10 )
//    yangidan.sort();
// console.log(yangidan)
// }else{
//     console.log("bu yerda yo'q")
// }

// let names = ["Ali", "Siroj", "Lola", "Samar"];

// let filtered= names.filter(name => name.length > 4);

// let mapped = filtered.map(name => name + " Hello");

// console.log(filtered);

// console.log(mapped);

// let nums = [-2, 1, 3, -5, 4];

// let birinchi = nums.map(n => n * 3);

// let ikkinchi = birinchi.filter(n => n >= 0)

// console.log(birinchi)
// console.log(ikkinchi)

// let arr = [0, 4, 0, 6, 10];

// let birinchi = arr.filter(n => n !== 0);

// let ikkinchi = birinchi.reduce((sum, n) => sum + n, 0) / birinchi.length;

// console.log(birinchi)
// console.log(ikkinchi)

// let fruits = ["apple", 'banana', 'orange']

// console.log(fruits.includes('banana'))
// console.log(fruits.includes("grape"))

// let numbers = [10, 20, 30, 40, 50, 60, 70]

// console.log(numbers.indexOf(30));
// console.log(numbers.lastIndexOf(30));

// let part = numbers.slice(1, 5);

// let part2 = numbers.splice(1,4, 0, 5678, 768, 5678,56789);

// console.log(part2)
// console.log(numbers);

  
// let user = {
//     fName: "madina",
//     age: 16,
//     isstudent: true,
//     "full name" : "madina qalandarova",
//     eshmat: "toshmat"
// }

// let user2 = {
//     ...user
// }

// let uesr3 = JSON.parse(JSON.stringify(user));

// user.country = "uzbekistan";

// console.log(uesr3)

// let user = {
//     fName: "madina",
//     age: 16,
//     isstudent: true,
    
//     greet(){
//         console.log("hello " + this.fName)
//     }
// }

// user.greet();
// console.log(user)

// let user = {
//     fName: "Madina",
//     age: 16,
//     isStudent: true,
//     address: {
//       city: "Tashkent",
//       zip: 221100,
//     },
  

//   };
  
//   let {
//     address: { city, zip },
//   } = user;
//   // console.log(city);
//   // console.log(zip);
  
//   let a = { name: "alisher" };
//   let b = { surname: "satimov" };
  
//   let fullName = { ...a, ...b };
//   // console.log(fullName);
  
//   let updateUser = {
//     ...fullName,
//     name: "azamat",
//   };
  
//   console.log(updateUser);
  
//   console.log(Object.entries(updateUser));


// let user = {
//     name: "jkwjehw",
//     age: 20,
// }

// for (let kalit in user) {
//        console.log(kalit, user[kalit])
// }
// const product = {
//     title: "Book",
//     price: 15,
//   };


// let updated = {
//     ...product,
//     price: 20
// }
// console.log(updated)

// let person = {
//     name: "Dilshod",
//     age: 30,
//   };

//   delete person.age
//   let {name, age = 18} = person
//   console.log(name, age)

// const car = {
//     brand: "BMW",
//     model: "X5",
    
//     getfullname(){
//         console.log(this.brand +" " +  this.model)
//     }
//   };

// car.getfullname();

// const user = {
//   name: "Sam",
//   address: {
//     city: "Tashkent",
//     zip: 100100,
//   }
// };

// const info = {
//   address: {
//     city: "Samarqand"
//   }
// };

// const { 
//   address: { 
//     city, 
//     street = "unknown" 
//   } 
// } = info;

// console.log(city);   
// console.log(street);

// const account = {
//   balance: 100,
//   addbalace(){
// console.log(120)
//   }
// };

// account.addbalace();

// const student = {
//   name: "Karim",
//   contact: {
//     email: "k@gmail.com",
//     phone: "999"
//   }
// };

// let {contact: {email}} = student;

// console.log(email);
// const user = {
//   firstName: "Bek",
//   years: 27
// };

// const { firstName: name, years: age } = user;

// let info = { name, age }; 

// console.log(info); 

// const student = {
//   name: "Diyor",
//   scores: {
//     math: 90,
//     english: 70
//   },
//   getAverage(){
//     return((this.scores.math + this.scores.english)/2)
//   }
// };

// console.log(student.scores.math)


// console.log(student.getAverage())                   

// let tagname = document.querySelector("p");
// let buaydi = document.querySelector("#buaydi");
// let buclass = document.querySelector(".buclass")

// console.log(tagname)
// console.log(buaydi)
// console.log(buclass)           

// let matn = document.querySelector("p");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {      
//     matn.textContent = "Matn o'zgardi!";
//     matn.style.color = "red";
//     matn.style.backgroundColor = "yellow";
//     matn.style.fontSize = "24px";
// })



// btn.addEventListener("click", () => {
    // matn.classList.add("still")    
//     matn.classList.remove("active")
//     matn.classList.toggle("still")
//     console.log(matn)
// })

// let btn = document.querySelector(".btn")
// let card = document.querySelector(".card")

// let yangiMatn = document.createElement("h1");

// yangiMatn.textContent = "Hello World"
// yangiMatn.classList.add("still")

// btn.addEventListener("click", () => {
//     card.appendChild(yangiMatn)
//     console.log(card)
// }
// )

// btn.addEventListener("dblclick", () => {
//     card.removeChild(yangiMatn)
//     console.log(card)
// })

// let card = document.querySelector(".card")

// card.addEventListener('mouseover', () => {
//     card.style.backgroundColor = "lightblue"   
//     console.log("Mouse is over the card")                 
// })

// card.addEventListener('mouseout', () => {
//     card.style.backgroundColor = "black"
//         console.log("Mouse is out of the card")
// })  

// card.addEventListener("mousedown", () => {
//     card.style.backgroundColor = "lightgreen"
// console.log("Mouse button is pressed down on the card")
// })

// card.addEventListener("mouseup", () => {
//     card.style.backgroundColor = "white"
//     console.log("Mouse button is released on the card")
// }   )       

// card.addEventListener("mousemove", () => { 

//     console.log("Mouse is moving over the card")
// })

let matn = document.querySelector("#bosdim")
let btn = document.querySelector(".btn")



btn.addEventListener("click", () => {
    let yangiElement = document.createElement("li")
yangiElement.textContent = "Yangi li"   
    matn.appendChild(yangiElement)
    console.log("bosdim")
})
