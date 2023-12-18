//Asynchronous example
console.log("First line");
console.log("Second line");
console.log("third line");
setTimeout(()=>{
    console.log("function execution after 5s")
},5000);
console.log("fourth line");
console.log("Fifth line");

//callback
function sum(x,y){
    console.log(x+y);
}
function cal(a,b,sumcallback){
    sum(a,b);
}

cal(23,32,sum);
setTimeout(cal(3,43,(a,b)=>{
    
}),10000);

//callback hell
function getdata(dataID,getnxtData){
    setTimeout(()=>{
        console.log("data",dataID);
        getnxtData();
    },5000);
}
getdata(12,()=>{
    getdata(23)
});