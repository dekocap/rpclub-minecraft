// Боковое меню
fetch('side-menu.html')
.then(r => r.text())
.then(html => { document.getElementById('side-menu').innerHTML = html; });
/* Замена картинки в боковом меню */
document.addEventListener("DOMContentLoaded", () => {
  fetch("side-menu.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("side-menu").innerHTML = data;

      setTimeout(() => {
        const path = window.location.pathname;
        const img = document.querySelector("#side-menu .side-menu-img");

        if (img) {
            if (path.includes("princess.html")) {
            img.src = "assets/trident.png";
        } else if (path.includes("yuhab.html")) {
            img.src = "assets/compass.png";
        } else if (path.includes("teto.html")) {
            img.src = "assets/enderPearl.png";
        } else if (path.includes("blazey.html")) {
            img.src = "assets/fireCharge.png";
        } else if (path.includes("yellow-rabbit.html")) {
            img.src = "assets/goldIngot.png";
        } else if (path.includes("nautilus.html")) {
            img.src = "assets/nautilusShell.png";
        } else if (path.includes("shino.html")) {
            img.src = "assets/eyeOfEnder.png";
        } else if (path.includes("keeper.html")) {
            img.src = "assets/bread.png";
        } else if (path.includes("beatrice.html")) {
            img.src = "assets/copperHoe.png";
        } else if (path.includes("gosha.html")) {
            img.src = "assets/buriedTreasureMap.png";}
            else if (path.includes("mcdee.html")) {
            img.src = "assets/string.png";
            } else if (path.includes("red-cat.html")) {
            img.src = "assets/musicDiscCat.png";
        } else {
            img.src = "assets/heartOfTheSea.png";
        }
        }
      }, 0);
    });
});

// Футер
fetch('footer.html')
.then(r => r.text())
.then(html => { document.getElementById('site-footer').innerHTML = html; });