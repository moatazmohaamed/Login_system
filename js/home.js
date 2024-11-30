const username = document.getElementById(`name`)
const logOutBtn = document.getElementById("logOutBtn");

const user = localStorage.getItem("userName");
username.innerHTML += user;

logOutBtn.addEventListener("click", function () {
    localStorage.removeItem(`userName`)
    location.href = './index.html';
})

const href = location.href;
if (user === null && href.includes('/home')) {
    location.replace('https://' + location.hostname + '/index.html')
}
