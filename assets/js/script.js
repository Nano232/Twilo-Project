function showNav() {
  let icon = document.getElementById("icon");
  let list = document.getElementById("list");

  icon.onclick = function () {
    if (list.style.left === "-100%") {
      list.style.left = "0";
    } else {
      list.style.left = "-100%";
    }
  };
}
showNav();
