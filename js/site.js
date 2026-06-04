function loadSkillDetail(skill) {
  const panel = document.getElementById("skill-details-panel");
  if (!window.skillDetails || !window.skillDetails[skill]) {
    panel.innerHTML = '<p class="detail-summary">Skill details are currently unavailable.</p>';
    return;
  }
  panel.innerHTML = window.skillDetails[skill];
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
  const cards = document.querySelectorAll(".skill-option");
  const mobileContainer = document.getElementById("skills-mobile-details");

  if (!cards.length) {
    return;
  }

  const skillKeys = Array.prototype.map.call(cards, function(card) {
    return card.getAttribute("data-skill");
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
      const skill = this.getAttribute("data-skill");
      loadSkillDetail(skill);
      selectCard(this);
    });
  });

  if (mobileContainer) {
    renderAllSkillDetails(skillKeys);
  }

  const firstCard = document.querySelector(".skill-option.selected") || cards[0];
  const firstSkill = firstCard.getAttribute("data-skill");
  loadSkillDetail(firstSkill);
  selectCard(firstCard);
});

function gotoSite(site) {
  window.open(site);
}