function setdata(){
var phoneormail=document.getElementById("mobileandemail").value;
console.log(phoneormail)
var username=document.getElementById("username").value;
console.log(username)
var password=document.getElementById("password").value;
console.log(password);
localStorage.setItem("phoneormail",phoneormail)
localStorage.setItem("username",username)
localStorage.setItem("password",password)
}
function check(){
var userinput=document.getElementById("input1").value;
console.log(userinput)
var passwordinp=document.getElementById("password1").value;
console.log(passwordinp)
var signupphone=localStorage.getItem("phoneormail");
var signupusername=localStorage.getItem("username");
var signupass=localStorage.getItem("password");
console.log(signupphone)
console.log(signupusername)
console.log(signupass)
if (((userinput==signupphone)||(userinput==signupusername))&&(passwordinp==signupass)){
    document.getElementById("success").style.display="block";
    document.getElementById("upper").style.display="none";
    document.getElementById("lower").style.display="none";
    
}
else{
    document.getElementById("error").style.display="block";
    document.getElementById("upper").style.display="none";
    document.getElementById("lower").style.display="none";
}
}
function ok1(){
    document.getElementById("success").style.display="none";
    document.getElementById("upper").style.display="block";
    document.getElementById("lower").style.display="block";
}
function ok2(){
    document.getElementById("error").style.display="none";
    document.getElementById("upper").style.display="block";
    document.getElementById("lower").style.display="block";
}

