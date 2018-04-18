var ar1=[0,1,2,3,4,5,6];
let index=7;
var ar2= [...ar1.slice(0,index),-1,...ar1.slice(index+1) ];
console.log(ar2);
