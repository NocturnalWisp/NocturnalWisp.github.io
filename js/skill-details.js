function renderSkillDetail(skill) {
  const itemsHtml = skill.items.map(item => `<li>${item}</li>`).join('');
  const actionHtml = skill.action
    ? `<button class="btn btn-primary modal-action" onclick="gotoSite('${skill.action.url}')">
         <i class="fas fa-plus fa-fw"></i>
         ${skill.action.label}
       </button>`
    : '';

  return `
    <div class="skill-detail-panel">
      <div class="skill-detail-header">
        <div class="modal-skill-icon"><i class="${skill.icon}"></i></div>
        <div class="skill-modal-title-wrap">
          <span class="pill">Skill</span>
          <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">${skill.title}</h2>
        </div>
      </div>
      <p class="modal-summary">${skill.summary}</p>
      <ul class="experience-list">${itemsHtml}</ul>
      ${actionHtml}
    </div>
  `;
}

const skillContent = {
  frontend: {
    icon: 'fab fa-react',
    title: 'Frontend Engineering',
    summary: 'React driven frontend delivery with reusable systems and production ready UX flows.',
    items: [
      'Shipped React feature flows for onboarding, admin operations, and daily user workflows.',
      'Built responsive component patterns in Chakra UI to keep interfaces consistent and maintainable.',
      'Turned product requirements into implementation ready UI plans with clear user states.',
      'Optimized static page for efficient loading and quick interactions.'
    ]
  },
  backend: {
    icon: 'fas fa-server',
    title: 'Backend & API Design',
    summary: 'Backend and API design focused on clean integration, reliable data flow, and maintainable service logic.',
    items: [
      'Built backend connected workflows for onboarding, authorization, and admin tooling.',
      'Structured predictable read/write paths and explicit state transitions across feature surfaces.',
      'Implemented JSON based save/load systems for durable and testable application state.',
      'Designed modular server contracts and data structures to support evolving product needs and long term maintainability.'
    ]
  },
  firebase: {
    icon: 'fas fa-database',
    title: 'Firebase Architecture',
    summary: 'Firebase architecture for role-aware auth, real-time collaboration data, and operational automation.',
    items: [
      'Implemented Google sign-in and role based access control for production teacher and admin workflows.',
      'Structured Firestore data access for reliable real time collaboration and low friction updates.',
      'Added Firebase Functions to support admin automation and operational tasks.',
      'Shipped Firebase backed features for real-time student progress tracking, teacher dashboards, and admin tools.'
    ]
  },
  quality: {
    icon: 'fas fa-vial',
    title: 'Quality & Reliability',
    summary: 'Quality engineering through pre-release validation, structured debugging, and release-safe workflows.',
    items: [
      'Validated frontend behavior and backend integration paths before launches.',
      'Executed high frequency test passes in large scale environments.',
      'Utilized simulation scripts to test high scale interactions.',
      'Relied on version control checkpoints and review discipline to reduce regressions.'
    ]
  },
  product: {
    icon: 'fas fa-box',
    title: 'Product Development',
    summary: 'Product development that aligns user outcomes, technical constraints, and measurable performance gains.',
    items: [
      'Shipped features that improved onboarding and recurring daily workflows for real users.',
      'Reduced critical 3D mesh processing from over 10,000 CPU cycles to under 1,000.',
      'Utilized Jira, version control, and Kanban boards to manage scoped feature work and track progress against milestones.',
      'Iterated on shipped functionality using user and stakeholder feedback loops.'
    ]
  },
  collaboration: {
    icon: 'fas fa-users',
    title: 'Team Collaboration',
    summary: 'Cross functional collaboration grounded in communication, mentoring, and accountable delivery.',
    items: [
      'Worked in agile cycles with scoped milestones, iterative reviews, and transparent status updates.',
      'Documented workflows and implementation decisions to support onboarding and shared ownership.',
      'Provided mentorship to junior developers on architecture choices and delivery habits.',
      'Coordinated with stakeholders to keep technical direction aligned with product priorities.'
    ]
  }
};

window.skillDetails = Object.keys(skillContent).reduce((acc, key) => {
  acc[key] = renderSkillDetail(skillContent[key]);
  return acc;
}, {});
