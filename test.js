const fruits = ["Banana", "Orange", "Apple", "Mango", 1, 2, 3];

// fruits.splice(2,3,"frr")
const i = fruits.indexOf("Apple");

const fruitsRemoved = fruits.filter((val) => {
    return val !== "Apples" && val !== "Orange"
})
// const newArr= [...fruits.splice(0,i+1),"new fruits",...fruits.splice(1)]
console.log(fruitsRemoved);

const updatesArr= fruits.map((val)=>{
    return val==2 || val==1 ?val*2:val;
})
console.log(updatesArr);





