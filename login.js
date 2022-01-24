


let userCorrectInfo=JSON.parse(localStorage.getItem('loginInfo'));


function userInfo(){

let inputEmailGivenByUser=document.getElementById('inputEmail3');
let inputPasswordGivenByUser=document.getElementById('inputPassword3');

      
if(userCorrectInfo.email==inputEmailGivenByUser && userCorrectInfo.password==inputPasswordGivenByUser){
    console.log('info given is correct');
}
else{
  let checkedInfo=document.getElementById('checkedInfo');
  checkedInfo.innerHTML='Sign in is unsuccessful';
}


}