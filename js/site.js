function loadProjectDetail(project) {
  const panel = document.getElementById("project-details-panel");
  if (!window.projectDetails || !window.projectDetails[project]) {
    panel.innerHTML = '<p class="detail-summary">Project details are currently unavailable.</p>';
    return;
  }
  panel.innerHTML = window.projectDetails[project];
}

function initDetailSelector(options) {
  const cards = document.querySelectorAll(options.cardSelector);
  const mobileContainer = document.getElementById(options.mobileContainerId);

  if (!cards.length) {
    return;
  }

  const keys = Array.prototype.map.call(cards, function(card) {
    return card.getAttribute(options.dataAttribute);
  });

  function selectCard(card) {
    cards.forEach(function(btn) {
      btn.classList.remove("selected");
      btn.setAttribute("aria-pressed", "false");
    });
    card.classList.add("selected");
    card.setAttribute("aria-pressed", "true");
  }

  cards.forEach(function(btn) {
    btn.addEventListener("click", function() {
      const key = this.getAttribute(options.dataAttribute);
      options.loadDetail(key);
      selectCard(this);
    });
  });

  if (mobileContainer && options.renderAllDetails) {
    options.renderAllDetails(keys);
  }

  const firstCard = document.querySelector(options.cardSelector + ".selected") || cards[0];
  const firstKey = firstCard.getAttribute(options.dataAttribute);
  options.loadDetail(firstKey);
  selectCard(firstCard);
}

function renderAllProjectDetails(projectKeys) {
  const mobileContainer = document.getElementById("projects-mobile-details");
  if (!mobileContainer) {
    return;
  }

  if (!window.projectDetails) {
    mobileContainer.innerHTML = "";
    return;
  }

  mobileContainer.innerHTML = projectKeys.map(function(project) {
    return window.projectDetails[project] || "";
  }).join("");
}

document.addEventListener("DOMContentLoaded", function() {
  initDetailSelector({
    cardSelector: "#projects .project-option",
    dataAttribute: "data-project",
    mobileContainerId: "projects-mobile-details",
    loadDetail: loadProjectDetail,
    renderAllDetails: renderAllProjectDetails
  });
});

function gotoSite(site) {
  window.open(site);
}
