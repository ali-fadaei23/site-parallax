$(function () {
  let nav = document.querySelector(".site-nav");
  let gamesWitcher = document.querySelector("#games");
  let navHeight = nav.scrollHeight;

  function moveHandler() {
    let mainOnTop = gamesWitcher.getBoundingClientRect().top - navHeight;

    mainOnTop < 0
      ? nav.classList.add("in-body")
      : nav.classList.remove("in-body");

    window.requestAnimationFrame(moveHandler);
  }

  window.requestAnimationFrame(moveHandler);
});
