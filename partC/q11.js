function createWallet(){
    let bal=0;
    function addMoney(amount){
        bal+=amount;
    }
    function checkBalance(){
        return bal;
    }
return { addMoney,checkBalance }
}

let mywal=createWallet();