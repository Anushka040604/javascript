//JSON.parse(data) method-to parse a string data into a js object
//JSON.stringify(json) method-to parse js object data into json
let jsonRes='{"fact":"Cat bites are more likely to become infected than dog bites.","length":60}';

let validRes=JSON.parse(jsonRes);
console.log(validRes.fact);

let student={
    name:'Anushka',
    college:'viit',
};
let st=JSON.stringify(student);
console.log(st);