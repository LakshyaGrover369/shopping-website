

  function userInfo(){

    let userEmail=document.getElementById('inputEmail4').value;
    let userPassword=document.getElementById('inputPassword4').value;
    

    let userInfoObj={
      email: userEmail,
      Password: userPassword
    }
    localStorage.setItem('loginInfo', JSON.stringify(userInfoObj));

  }


