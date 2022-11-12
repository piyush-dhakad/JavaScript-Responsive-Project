
console.log(window.location.href);


 let h2Name = document.getElementById('name');           // select h2 tag name 
 let h2Mobile = document.getElementById('mobile');           // select h2 tag name 
 let h2dob = document.getElementById('dob');           // select h2 tag name 
let h2Gender = document.getElementById('gender');    // select h2 tag  gender
let h2other = document.getElementById('other');           // select h2 tag name 


let urlStr = new URL(document.location.href); //create object of ulr by passing url;
let data = urlStr.searchParams;                 //yeh ek read only he //A URLSearchParams object
// which can be used to access the individual query parameters found in search.

let namee = data.get('name');       // get name from url                                       
let number = data.get('number'); 
let dob = data.get('dob');
let gender = data.get('gender');    // get gender from url
let other = data.get('other');


h2Name.innerText = namee;        // set name 
h2Mobile.innerText = number;
h2dob.innerText = dob;
h2Gender.innerText = gender;       // set gender
h2other.innerText = other;

let h3TagDate = document.getElementById('date');
setInterval(() => {

    h3TagDate.innerText = new Date().toLocaleTimeString();
}, 500);
// Create a button, on click,  increment a value and always display updated value
