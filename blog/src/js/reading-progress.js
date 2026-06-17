(function () {
  var bar = document.getElementById("reading-progress-bar");
  var content = document.querySelector(".blog-post-body");
  if (!bar || !content) return;

  function update() {
    var rect = content.getBoundingClientRect();
    var contentHeight = content.offsetHeight;
    var viewportHeight = window.innerHeight;
    var scrollRange = contentHeight - viewportHeight;

    if (scrollRange <= 0) {
      bar.style.width = "100%";
      return;
    }

    var scrolled = -rect.top;
    var progress = Math.min(1, Math.max(0, scrolled / scrollRange));
    bar.style.width = progress * 100 + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
})();
