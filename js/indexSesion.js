//variables
let superUser = { name: "admin", password: "admin" };
let stateSesion = JSON.parse(localStorage.getItem("stateSesion")) || false;
let user = JSON.parse(localStorage.getItem("user")) || "";
let linkAdmin = document.getElementById("linkAdmin");
let regBtn = document.getElementById("regBtn");
let userBtn = document.getElementById("userBtn");
let exitBtn = document.getElementById("exitBtn");

if (stateSesion) {
  if (user.name === superUser.name) {
    linkAdmin.className = "nav-item";
    regBtn.className = "d-none";
    exitBtn.className = "btn btn-dark";
    userBtn.innerHTML = user.name;
    userBtn.removeAttribute("href");
    exitBtn.addEventListener("click", closeSesion);
  } else {
    regBtn.className = "d-none";
    exitBtn.className = "btn btn-dark";
    userBtn.innerHTML = user.name;
    userBtn.removeAttribute("href");
    exitBtn.addEventListener("click", closeSesion);
  }
}
//funciones
function closeSesion() {
  if (stateSesion) {
    stateSesion = false;
    localStorage.setItem("stateSesion", JSON.stringify(stateSesion));
    localStorage.removeItem("user");
    window.location.replace("index.html");
  } else {
    window.location.reload();
  }
}
