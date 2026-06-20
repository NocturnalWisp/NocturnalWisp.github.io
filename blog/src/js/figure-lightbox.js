(function () {
  var body = document.querySelector(".blog-post-body");
  var lightbox = document.getElementById("blog-lightbox");
  if (!body || !lightbox) return;

  var image = lightbox.querySelector(".blog-lightbox-image");
  var caption = lightbox.querySelector(".blog-lightbox-caption");
  var closeButton = lightbox.querySelector(".blog-lightbox-close");
  var backdrop = lightbox.querySelector(".blog-lightbox-backdrop");
  var lastFocus = null;

  function open(thumbnail) {
    lastFocus = thumbnail;
    image.src = thumbnail.currentSrc || thumbnail.src;
    image.alt = thumbnail.alt;
    caption.textContent = thumbnail.alt || "";
    caption.hidden = !thumbnail.alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("blog-lightbox-open");
    closeButton.focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("blog-lightbox-open");
    image.removeAttribute("src");
    if (lastFocus) lastFocus.focus();
  }

  body.querySelectorAll("img").forEach(function (thumbnail) {
    thumbnail.classList.add("blog-post-figure");
    thumbnail.tabIndex = 0;
    thumbnail.setAttribute("role", "button");
    thumbnail.setAttribute(
      "aria-label",
      "View enlarged image" + (thumbnail.alt ? ": " + thumbnail.alt : ""),
    );

    thumbnail.addEventListener("click", function () {
      open(thumbnail);
    });

    thumbnail.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(thumbnail);
      }
    });
  });

  closeButton.addEventListener("click", close);
  backdrop.addEventListener("click", close);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      close();
    }
  });
})();
