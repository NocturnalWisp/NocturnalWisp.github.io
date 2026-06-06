function loadSkillDetail(skill) {
  const panel = document.getElementById("skill-details-panel");
  if (!window.skillDetails || !window.skillDetails[skill]) {
    panel.innerHTML = '<p class="detail-summary">Skill details are currently unavailable.</p>';
    return;
  }
  panel.innerHTML = window.skillDetails[skill];
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

function renderAllSkillDetails(skillKeys) {
  const mobileContainer = document.getElementById("skills-mobile-details");
  if (!mobileContainer) {
    return;
  }

  if (!window.skillDetails) {
    mobileContainer.innerHTML = "";
    return;
  }

  mobileContainer.innerHTML = skillKeys.map(function(skill) {
    return window.skillDetails[skill] || "";
  }).join("");
}

document.addEventListener("DOMContentLoaded", function() {
  initDetailSelector({
    cardSelector: "#skills .skill-option",
    dataAttribute: "data-skill",
    mobileContainerId: "skills-mobile-details",
    loadDetail: loadSkillDetail,
    renderAllDetails: renderAllSkillDetails
  });
});

function gotoSite(site) {
  window.open(site);
}