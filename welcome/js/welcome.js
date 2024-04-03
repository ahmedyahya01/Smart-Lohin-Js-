var welcomeMessage = document.getElementById('welcomeMessage');
var logOutBtn = document.getElementById('logOut');

logOutBtn.addEventListener('click', logOut);

if (localStorage.getItem('userName') != null) {
    welcomeMessage.innerHTML = `welcome ${localStorage.getItem('userName')}`
}
function logOut() {
    window.location.href = "../login/login.html";
    localStorage.removeItem('userName');
}
