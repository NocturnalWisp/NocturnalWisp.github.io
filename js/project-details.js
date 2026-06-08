function renderProjectDetail(project) {
  const itemsHtml = project.items.map(function(item) {
    return "<li>" + item + "</li>";
  }).join("");

  const iconHtml = project.iconImg
    ? '<img src="' + project.iconImg + '" alt="" class="button-icon" width="28" height="28" loading="lazy" decoding="async">'
    : '<i class="' + project.icon + '"></i>';

  const linkHtml = project.link
    ? '<p class="detail-summary"><a href="' + project.link + '" target="_blank" rel="noopener noreferrer">' +
      project.linkLabel +
      ' <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>'
    : "";

  return (
    '<div class="skill-detail-panel">' +
      '<div class="skill-detail-header">' +
        '<div class="detail-icon">' + iconHtml + "</div>" +
        '<div class="detail-title-wrap">' +
          '<span class="badge">Project</span>' +
          '<h2 class="detail-title">' + project.title + "</h2>" +
        "</div>" +
      "</div>" +
      '<p class="detail-summary">' + project.summary + "</p>" +
      '<ul class="detail-list">' + itemsHtml + "</ul>" +
      linkHtml +
    "</div>"
  );
}

const projectContent = {
  lingolo: {
    iconImg: "img/LingoloIcon.ico",
    title: "Lingolo",
    summary: "Real time competitive multiplayer game for French classrooms. Sole developer. Owned architecture, infrastructure, and deployment.",
    link: "https://playlingolo.com/teachers",
    linkLabel: "playlingolo.com",
    items: [
      "Solo full-stack: conceived and shipped through staging/production pipeline, Google Auth, and teacher approval admin system.",
      "Firebase Realtime DB with custom listeners for live leaderboards and per-student analytics at low read cost.",
      "Students join with a game code. No accounts or setup required.",
      "Curriculum aligned to Alberta Core French.",
      "Post-game analytics flag struggling students, concepts to reteach, and missed vocabulary.",
      "Already receiving positive feedback on potential classroom effectiveness."
    ]
  },
  seljax: {
    icon: "fas fa-drafting-compass",
    title: "Seljax: 3D Deck Designer",
    summary: "Inherited a bug ridden legacy DirectX codebase. Resolved a critical performance bottleneck, owned architecture, and shipped production ready.",
    link: "https://seljax.com",
    linkLabel: "seljax.com",
    items: [
      "Wrote a new foundation while keeping existing work compatible.",
      "Cut screenshot load times from 20 seconds to 3 seconds by replacing C# object capture with unsafe pointer blocks in the graphics API pipeline.",
      "Owned architecture changes across the product.",
      "Mentored a junior on graphics APIs, 3D math, and procedural layout systems. Guided them from onboarding to independant contributor.",
      "Partnered with IT post-launch on graphics API fixes and generation bugs for test and customer releases."
    ]
  },
  drython: {
    icon: "fas fa-terminal",
    title: "Drython Parser",
    summary: "Custom scripting language and hybrid AST/RPN parser in Rust. Designed for accessible ECS game engine scripting.",
    link: "https://github.com/NocturnalWisp/Drython-Parser",
    linkLabel: "github.com/NocturnalWisp/Drython-Parser",
    items: [
      "Designed a custom language (spec, grammar, parser) for game engines without C#/C++ complexity.",
      "Built in Rust for memory safety and fewer runtime bugs than a C++ engine stack.",
      "Hybrid AST + RPN expression evaluation. Traded traversal complexity for leaner structure.",
      "First-class collections with embedded function pointers for dynamic ECS-friendly scripting.",
      "Born from early Unity ECS frustration. Approachable syntax for developers new to Entity Component System patterns.",
      "Personal project · Working parser · Open source GPL-3.0."
    ]
  },
  nait360: {
    icon: "fas fa-vr-cardboard",
    title: "NAIT 360° Boreal Viewer",
    summary: "Built a custom JS API to stream large-file 360° video over the web for immersive field researcher training.",
    link: "https://techlifetoday.nait.ca/2021/360-degree-immersive-training-boreal-reclamation",
    linkLabel: "nait.ca",
    items: [
      "Contract: 360° training app for NAIT field researchers studying boreal reclamation.",
      "Teaches environmental concepts in-view, replacing classroom instruction for remote field work.",
      "Mentored the lead and junior developers on Unity's web API and Scriptable Objects architecture through pair-programming sessions",
      "Established Scriptable Object patterns to keep the project modular and extensible. Enabled the team to add content without touching core systems."
    ]
  },
  "floating-inspector": {
    icon: "fas fa-toolbox",
    title: "Floating Inspector",
    summary: "Published Unity Editor extension. Custom inspector API integration shipped and sold on the Unity Asset Store.",
    link: "https://assetstore.unity.com/packages/tools/utilities/floating-inspector-236873",
    linkLabel: "Unity Asset Store",
    items: [
      "Detaches the inspector into a floating window. Built to solve my own workflow friction.",
      "Published on the Asset Store (Built-in, URP, HDRP) under Nocturnal Wisp.",
      "Achieved sales independently with no marketing budget. Discoverability driven entirely by asset store search.",
      "Personal tool polished to Unity's submission standards."
    ]
  }
};

window.projectDetails = Object.keys(projectContent).reduce(function(acc, key) {
  acc[key] = renderProjectDetail(projectContent[key]);
  return acc;
}, {});
