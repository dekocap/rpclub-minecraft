let currentOpenBook = null;
let currentOpenPage = null;

function openBook(evt, bookName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  // если нажали на уже открытую книгу — закрываем её
  if (currentOpenBook === bookName) {
    const bookEl = document.getElementById(bookName);
    if (bookEl) {
      bookEl.style.display = "none";
      // убрать active у верхней кнопки (evt — кнопка)
      evt.currentTarget.classList.remove("active");
      // убрать active у кнопок страниц и скрыть страницы внутри
      const pageButtons = bookEl.querySelectorAll(".pagetab .tabpage");
      pageButtons.forEach(b => b.classList.remove("active"));
      const pages = bookEl.querySelectorAll(".pagecontent");
      pages.forEach(p => p.style.display = "none");
    }
    currentOpenBook = null;
    currentOpenPage = null;
    return;
  }

  // скрыть все книги и убрать active у верхних кнопок
  Array.from(tabcontent).forEach(tc => tc.style.display = "none");
  Array.from(tablinks).forEach(tl => tl.classList.remove("active"));

  // показать выбранную книгу
  const selectedBook = document.getElementById(bookName);
  if (!selectedBook) return;
  selectedBook.style.display = "block";
  evt.currentTarget.classList.add("active");
  currentOpenBook = bookName;

  // Скрыть все страницы в книге и показать первую
  const pages = selectedBook.querySelectorAll(".pagecontent");
  pages.forEach(p => p.style.display = "none");
  if (pages.length > 0) {
    pages[0].style.display = "block";
    // сделать active у первой кнопки страниц (если есть)
    const pageButtons = selectedBook.querySelectorAll(".pagetab .tabpage");
    pageButtons.forEach(b => b.classList.remove("active"));
    if (pageButtons.length > 0) {
      pageButtons[0].classList.add("active");
    }
    currentOpenPage = pages[0].id;
  } else {
    currentOpenPage = null;
  }
}

function openPage(evt, pageId) {
  // скрыть все страницы (по всему документу)
  const allPages = document.getElementsByClassName("pagecontent");
  Array.from(allPages).forEach(p => p.style.display = "none");

  // убрать active у всех кнопок страниц
  const allPageBtns = document.getElementsByClassName("tabpage");
  Array.from(allPageBtns).forEach(btn => btn.classList.remove("active"));

  const pageEl = document.getElementById(pageId);
  if (!pageEl) return;

  // показать нужную страницу и пометить кнопку
  pageEl.style.display = "block";
  evt.currentTarget.classList.add("active");
  currentOpenPage = pageId;

  // убедиться, что книга, которой принадлежит эта страница, видна, и её верхняя вкладка активна
  const parentBook = pageEl.closest(".tabcontent");
  if (parentBook) {
    // скрываем все книги и показываем только эту
    const tabcontents = document.getElementsByClassName("tabcontent");
    Array.from(tabcontents).forEach(tc => tc.style.display = "none");
    parentBook.style.display = "block";
    currentOpenBook = parentBook.id;

    // выставить active у верхней кнопки, связанной с этой книгой (ищем по inline onclick)
    const tablinks = document.getElementsByClassName("tablinks");
    Array.from(tablinks).forEach(tl => {
      const onclickAttr = tl.getAttribute('onclick') || '';
      if (onclickAttr.indexOf("'" + parentBook.id + "'") !== -1 || onclickAttr.indexOf('"' + parentBook.id + '"') !== -1) {
        tl.classList.add("active");
      } else {
        tl.classList.remove("active");
      }
    });
  }
}