let hum = document.querySelector(".barDn");
let openMenu = document.querySelectorAll(".kishurDn");
let send = document.getElementById("sendBtn");
let popup = document.getElementById("poUp");
let btnpop = document.getElementById("btnpop");

hum.addEventListener("click", () => {
  if (hum.id == "hum") {
    for (let i of openMenu) {
      i.style.display = "block";
    }
    hum.id = "nohum";
    return;
  }
  if (hum.id == "nohum") {
    console.log("Hi");
    for (let i of openMenu) {
      i.style.display = "none";
    }
    hum.id = "hum";
    return;
  } else {
    console.log(hum.id);
  }
});

send.addEventListener("click", () => {
  document.querySelector(".main_container").style.opacity = "0.5";
  popup.style.opacity = "1";
});

btnpop.addEventListener("click", () => {
  location.reload(true);
});

