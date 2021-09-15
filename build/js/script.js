$(function () {
  let headerContent = document.querySelector(".header-content");
  let headerCue = document.querySelector(".header-cue");
  let nav = document.querySelector(".site-nav");
  let gamesWitcher = document.querySelector("#games");
  let navHeight = nav.scrollHeight;

  function moveHandler() {
    let top = window.pageYOffset;
    let mainOnTop = gamesWitcher.getBoundingClientRect().top - navHeight;

    mainOnTop < 0
      ? nav.classList.add("in-body")
      : nav.classList.remove("in-body");

    let currentCuePosition = headerContent.getBoundingClientRect().top;

    currentCuePosition < 0
      ? headerCue.classList.add("d-none")
      : headerCue.classList.remove("d-none");

    headerContent.style.transform = `translateY(-${top / 1}px)`;

    window.requestAnimationFrame(moveHandler);
  }

  window.requestAnimationFrame(moveHandler);
});
