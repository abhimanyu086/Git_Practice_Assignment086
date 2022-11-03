function checkPrime(num){
let counter=0;

for(let i=0;i<=num;i++){
if(num%i===0){
counter++;
}
}
   if(counter===2){
     return true;
   
}
   return false;

}
  let ans=checkPrime(13);

 if(ans==true){
console.log("Number is Prime");
}else{
   console.log("Number is not Prime");
}