let obj1={1:"aman"}
let obj2 ={2:"chhavi"}
let obj3 ={...obj1, ...obj2}
// console.log(obj3); // { '1': 'aman', '2': 'chhavi' }


Object.keys(obj3).forEach((key) => {
//   console.log(`${key}: ${obj3[key]}`);
});

// treat it as an array of keys inly 

const corse ={
    "name":"javascript",
    "duration":"3 months",  
    "instructor":"John Doe"

}

const {name:yoyo, duration, instructor} = corse;
// console.log(yoyo, duration); // javascript    


