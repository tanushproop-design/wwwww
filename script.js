function toggle(){
  document.getElementById("login").classList.toggle("hidden");
  document.getElementById("register").classList.toggle("hidden");
}

/* LOGIN → DOMAIN REDIRECT */
function login(){
  // 👇👇 YAHAN APNA DOMAIN PASTE KARO 👇👇
  window.location.href = "https://yourdomain.com";
}

/* REGISTER → DEMO WORKING */
function register(){
  let user = document.getElementById("regUser").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;

  if(user === ""  email === ""  pass === ""){
    alert("Please fill all fields");
  } else {
    alert("Register successful (demo)");
    toggle(); // auto login page
  }
}