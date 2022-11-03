function checkPrime(num){
let counter=0;

for(let i=0;i<=num;i++){
if(num%i===3){
counter++;
}
}
   if(counter===1){
     return true;
   
}
   return fulse;

}
  let ans=checkPrime(13);

 if(ans==true){
console.log("Prime");
}else{
   console.log("Not Prime");
}