// Боковое меню
fetch('side-menu.html')
.then(r => r.text())
.then(html => { document.getElementById('side-menu').innerHTML = html; });

// Футер
fetch('footer.html')
.then(r => r.text())
.then(html => { document.getElementById('site-footer').innerHTML = html; });