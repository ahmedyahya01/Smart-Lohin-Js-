var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var signUpBtn = document.getElementById('signupbtn');
var message = document.getElementById('message')

signUpBtn.addEventListener('click', addData);


var allData = [];

if (localStorage.getItem('myData') != null) {
    allData = JSON.parse(localStorage.getItem('myData'));
}

function addData() {

    var errMsg = vaidation();

    if (errMsg == true) {
        var Data = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }

        if (checkEmailExist() == true) {
            getAllertMessage('Email Already Exist', 'red')
        }

        else {
            allData.push(Data);
            clrData();
            localStorage.setItem('myData', JSON.stringify(allData));
            getAllertMessage("Succes", "green")
        }
    }
    else {
        getAllertMessage(errMsg, 'red')
    }
}

function getAllertMessage(text, color) {
    message.classList.replace('d-none', 'd-block')
    message.innerHTML = text;
    message.style.color = color;
}

function clrData() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}


function vaidation() {
    var nameRegex = /^([a-zA-Z ]){2,30}$/
    var emailRegex = /^[a-z0-9]{3,50}[@](gmail|yahoo|hotmail|)(.com)$/i;
    var passwordRegex = /^[a-z0-9]{8,}$/;


    if (nameRegex.test(nameInput.value) == false) {
        return "please enter the name";
    }
    else if (emailRegex.test(emailInput.value) == false) {
        return "please enter valid email";
    }
    else if (passwordRegex.test(passwordInput.value) == false) {
        return "password not less than 8 characters";
    }
    return true;
}

function checkEmailExist() {
    for (var i = 0; i < allData.length; i++) {
        if (allData[i].email == emailInput.value && allData[i].password == passwordInput.value) {
            return true
        }
    }
}