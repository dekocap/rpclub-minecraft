let currentOpenBook = null;
let currentOpenPage = null;

function openBook(evt, bookName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  if (currentOpenBook === bookName) {
    const bookEl = document.getElementById(bookName);
    if (bookEl) {
      bookEl.style.display = "none";
      evt.currentTarget.classList.remove("active");
      const pageButtons = bookEl.querySelectorAll(".pagetab .tabpage");
      pageButtons.forEach(b => b.classList.remove("active"));
      const pages = bookEl.querySelectorAll(".pagecontent");
      pages.forEach(p => p.style.display = "none");
    }
    currentOpenBook = null;
    currentOpenPage = null;
    return;
  }

  Array.from(tabcontent).forEach(tc => tc.style.display = "none");
  Array.from(tablinks).forEach(tl => tl.classList.remove("active"));

  const selectedBook = document.getElementById(bookName);
  if (!selectedBook) return;
  selectedBook.style.display = "block";
  evt.currentTarget.classList.add("active");
  currentOpenBook = bookName;

  const pages = selectedBook.querySelectorAll(".pagecontent");
  pages.forEach(p => p.style.display = "none");
  if (pages.length > 0) {
    pages[0].style.display = "block";
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
  const allPages = document.getElementsByClassName("pagecontent");
  Array.from(allPages).forEach(p => p.style.display = "none");

  const allPageBtns = document.getElementsByClassName("tabpage");
  Array.from(allPageBtns).forEach(btn => btn.classList.remove("active"));

  const pageEl = document.getElementById(pageId);
  if (!pageEl) return;

  pageEl.style.display = "block";
  evt.currentTarget.classList.add("active");
  currentOpenPage = pageId;

  const parentBook = pageEl.closest(".tabcontent");
  if (parentBook) {
    const tabcontents = document.getElementsByClassName("tabcontent");
    Array.from(tabcontents).forEach(tc => tc.style.display = "none");
    parentBook.style.display = "block";
    currentOpenBook = parentBook.id;

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