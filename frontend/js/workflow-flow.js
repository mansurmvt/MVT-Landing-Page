/**
 * SECTION 03: HOW WE WORK (CONNECTED WORKFLOW)
 * Pipeline: CLIENT NEED -> UNDERSTAND -> DESIGN -> BUILD -> TEST -> DEPLOY -> GROW / IMPROVE
 */

(function () {
  const stepCards = document.querySelectorAll('.workflow-step-card');
  const deepDiveTitle = document.getElementById('workflowDeepDiveTitle');
  const deepDiveDesc = document.getElementById('workflowDeepDiveDesc');
  const deepDiveDeliverable = document.getElementById('workflowDeepDiveDeliverable');
  const deepDiveTimeline = document.getElementById('workflowDeepDiveTimeline');

  if (!stepCards.length) return;

  const workflowData = {
    need: {
      title: '01. Client Need & Scope Invariant',
      desc: 'We extract your core business requirements, user expectations, and invariant operational boundaries before writing a single line of architecture.',
      deliverables: 'Mathematical Scope Matrix & System SLA Contracts',
      timeline: 'Days 1-3'
    },
    understand: {
      title: '02. Domain Deep Dive & Architecture Analysis',
      desc: 'Analyzing data schemas, concurrency models, third-party API dependencies, and high-throughput vector ingestion needs.',
      deliverables: 'System Architecture Blueprint & Database Schematics',
      timeline: 'Days 4-7'
    },
    design: {
      title: '03. System & Interface Design',
      desc: 'Crafting responsive, high-speed UX/UI workflows and establishing distributed microservice API contracts with zero ambiguity.',
      deliverables: 'Figma Design System & API Contract Definitions',
      timeline: 'Week 2'
    },
    build: {
      title: '04. Modular Core Engineering',
      desc: 'Senior full-stack engineering in rapid bi-weekly sprints. Writing clean, modular, self-documenting code with test-driven development (TDD).',
      deliverables: 'Modular SaaS Source Code & Vector Search Engine',
      timeline: 'Weeks 3-4'
    },
    test: {
      title: '05. Automated Verification & Chaos Testing',
      desc: 'Rigorous end-to-end integration tests, load stress benchmarks, and automated regression suites to guarantee zero performance degradation.',
      deliverables: '100% Automated Test Suite & Concurrency Audit',
      timeline: 'Continuous'
    },
    deploy: {
      title: '06. Zero-Downtime Deployment',
      desc: 'Blue/Green canary rollouts to global multi-region edge infrastructure with automated health monitoring and instantaneous rollbacks.',
      deliverables: 'Live Multi-Region Cloud Infrastructure & APM Telemetry',
      timeline: 'Sprint Finalization'
    },
    grow: {
      title: '07. Continuous Telemetry & Monotonic Optimization',
      desc: 'Post-launch monitoring, query optimization, cache hit acceleration, and proactive architecture co-piloting as your scale compounds.',
      deliverables: 'Telemetry Audit Reports & Scale Expansion Roadmap',
      timeline: 'Ongoing Strategic Partnership'
    }
  };

  function selectWorkflowStep(stepKey) {
    stepCards.forEach(card => card.classList.remove('active'));
    const activeCard = document.querySelector(`.workflow-step-card[data-step="${stepKey}"]`);
    if (activeCard) activeCard.classList.add('active');

    const data = workflowData[stepKey];
    if (!data) return;

    if (deepDiveTitle) deepDiveTitle.textContent = data.title;
    if (deepDiveDesc) deepDiveDesc.textContent = data.desc;
    if (deepDiveDeliverable) deepDiveDeliverable.textContent = data.deliverables;
    if (deepDiveTimeline) deepDiveTimeline.textContent = data.timeline;
  }

  stepCards.forEach(card => {
    const stepKey = card.getAttribute('data-step');
    card.addEventListener('click', () => selectWorkflowStep(stepKey));
  });

  // Default selection
  selectWorkflowStep('need');
})();
