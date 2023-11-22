function register(){
    const bank={
         uname:uname.value,
         acno:acno.value,
         psd:document.getElementById('psd').value,
         balance:0
 
     }
     if(bank.uname==''||bank.acno==''||bank.psd==''){
         alert('Fill all Datas')
     }
     else{
         if(bank.acno in localStorage){
             alert('Account already existed')
         }
         else{
             localStorage.setItem(bank.acno,JSON.stringify(bank))
             alert('New account created')
             window.location="./index2.html";
         }
     }
 }
 
 function login(){
     let acno=document.getElementById('acno').value
     let psd=document.getElementById('psd').value
 
     if(acno==''||psd==''){
         alert('Enter all details')
     }
     else{
         if(acno in localStorage){
             let banku=JSON.parse(localStorage.getItem(acno))
             if(psd==banku.psd){
                 localStorage.setItem(login,JSON.stringify(banku))
                 alert('Login successfull')
                 window.location="./index1.html";

             }
             else{
                 alert('incorrect password')
             }
         }
         else{
            alert('account does not found . Register for new account')
            window.location="./index3";
        }
    }
}

 let amount=0
 let psd=''

 function addd(){
    let amout=document.getElementById('amount').value
      amount=Math.floor(amout)
    let psd=document.getElementById('psd').value
    let acc=JSON.parse(localStorage.getItem(psd))
 
     if(amount=='' ||psd==''){
         alert('fill all datas')
     }
     else{
         if(amount<=0){
            alert('Enter valid amount')
         }
         else{
            if(psd==acc.psd){
                acc.balance += amount
                localStorage.setItem(acc.psd,JSON.stringify(acc))
                result.innerHTML=`${amount} is deposited <br>
                balance amount : ${acc.balance}`
                document.getElementById("form-control").reset();

            }
            else{
                alert('incorrect password')
                document.getElementById("form-control").reset();

            }
         }
     }
 }
 
 function get(){
    let amount=document.getElementById('amount1').value
    amount=Math.floor(amount)
    let psd=document.getElementById('psd1').value
    let acc=JSON.parse(localStorage.getItem(psd))
 
     if(amount=='' ||psd==''){
         alert('fill all datas')
     }
     else{
         if(amount<=0){
            alert('Enter valid amount')
         }
         else{
            if(psd==acc.psd){
                acc.balance -= amount
                localStorage.setItem(acc.psd,JSON.stringify(acc))
                result1.innerHTML=`withdraw amount: ${amount} <br>
                balance amount : ${acc.balance}`
                document.getElementById("form-control").reset();

            }
            else{
                alert('incorrect password')

            }
         }
     }
 }

 