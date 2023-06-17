/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(function(item){
    if(item.profession=="developer") console.log(item);
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(function(item){
    if(item.profession=="developer"){
      console.log(item);
    }
  })
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  arr.forEach(function(item){
      console.log(item);
  })
}

function removeAdmin() {
  let withoutadmin = arr.filter(item=> item.profession!=="admin");
  withoutadmin.forEach(function(item){
    console.log(item);
  })
}

function concatenateArray() {
  let newarr = [
    { id: 11, name: "Dev", age: "18", profession: "tester" },
    { id: 12, name: "Maria", age: "20", profession: "developer" },
    { id: 13, name: "Kiara", age: "19", profession: "admin" }
  ]
  let arr3 = arr.concat(newarr);
  arr3.forEach(item=>console.log(item))
}
