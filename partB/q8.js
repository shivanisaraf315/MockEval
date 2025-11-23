let nums=[10,3,7,20,13,2];
let sq=nums.map(n=>n*n);
console.log(sq);

let prime=nums.filter(n=>{
    if(n<2)
        return false;
    for (let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) 
            return false
    }
    return true;
});
console.log(prime);

let sum = nums.reduce((a,b)=>a+b);
console.log(sum);

let des = nums.sort((a,b)=>b-a);
console.log(des);