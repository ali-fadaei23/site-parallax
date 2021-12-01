$(function () {
  let headerContent = document.querySelector(".header-content");
  let headerCue = document.querySelector(".header-cue");
  let nav = document.querySelector(".site-nav");
  let gamesWitcher = document.querySelector("#games");
  let witcher = document.querySelector("#witcher-2");
  let navHeight = nav.scrollHeight;

  function inViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
      (rect.top >= 0 && rect.bottom <= window.innerHeight)
    );
  }

  function moveHandler() {
    let top = window.pageYOffset;
    let mainOnTop = gamesWitcher.getBoundingClientRect().top - navHeight;

    console.log(inViewport(witcher));

    mainOnTop < 0
      ? nav.classList.add("in-body")
      : nav.classList.remove("in-body");

    let currentCuePosition = headerContent.getBoundingClientRect().top;

    currentCuePosition < 0
      ? headerCue.classList.add("d-none")
      : headerCue.classList.remove("d-none");

    headerContent.style.transform = `translateY(-${top / 2}px)`;
    headerContent.style.opacity =
      1 - Math.max(top / (window.innerHeight * 0.2), 0);

    window.requestAnimationFrame(moveHandler);
  }

  window.requestAnimationFrame(moveHandler);
});
