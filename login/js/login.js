var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
var loginBtn = document.getElementById('loginBtn');
var message = document.getElementById('message');
var allData = [];

loginBtn.addEventListener('click', logIn);

if (localStorage.getItem('myData') != null) {
    allData = JSON.parse(localStorage.getItem('myData'));
}

function logIn() {
    if (checkInputs() == true) {
        getAllertMessage("Please enter the email and password", 'Red');
    }
    else {
        if (checkEmailAndPassword() == true) {
            window.location.href = "../welcome/welcome.html";
        }
        else {
            getAllertMessage('Email Or Password Not Correct', 'red');
        }
    }
}
function getAllertMessage(text, color) {
    message.classList.replace('d-none', 'd-block')
    message.innerHTML = text;
    message.style.color = color;
}
function checkEmailAndPassword() {

    for (var i = 0; i < allData.length; i++) {
        if (allData[i].email == emailInput.value && allData[i].password == passwordInput.value) {
            localStorage.setItem('userName', allData[i].name);
            return true;
        }
    }
}
function checkInputs() {
    if (emailInput.value == '' || passwordInput.value == '') {
        return true
    }
}