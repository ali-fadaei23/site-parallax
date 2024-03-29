$(function () {
  let headerContent = document.querySelector(".header-content");
  let headerCue = document.querySelector(".header-cue");
  let nav = document.querySelector(".site-nav");
  let gamesWitcher = document.querySelector("#games");
  let witcherCoverScroll = document.querySelectorAll("#witcher-group .witcher");
  let navHeight = nav.scrollHeight;

  witcherCoverScroll.forEach(
    (item) => (item.style.animationDelay = `${Math.random() * 1 + 0.4}s`)
  );

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

    witcherCoverScroll.forEach((item) =>
      inViewport(item)
        ? item.classList.add("appear")
        : item.classList.remove("appear")
    );

    window.requestAnimationFrame(moveHandler);
  }

  window.requestAnimationFrame(moveHandler);

  // Medal Section

  let controller = new ScrollMagic.Controller();
  let medalTextTween = TweenMax.from(".medal-text", {
    y: 400,
    opacity: 0,
  });

  new ScrollMagic.Scene({
    triggerElement: "#medal",
    duration: "100%",
    triggerHook: 0,
  })
    .setTween(medalTextTween)
    .setPin("#medal")
    .addTo(controller);

  // Medal icn

  let medalTween = new TimelineMax();

  medalTween
    .from("#medal-witcher", {
      scale: 0.5,
      opacity: 0,
      rotation: -40,
      x: "100%",
      y: "-200%",
    })
    .to("#medal-witcher", {
      rotation: 40,
      opacity: 0,
      x: "-100%",
      y: "220%",
    });

  let medalScene = new ScrollMagic.Scene({
    triggerElement: "#medal",
    duration: "200%",
    triggerHook: 0,
  })
    .setTween(medalTween)
    .addTo(controller);
});
