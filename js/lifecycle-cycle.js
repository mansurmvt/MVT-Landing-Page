/**
 * SECTION 6: THE CONTINUOUS ENGINEERING CYCLE
 * Interactive Circular Loop Diagram (Matched to Reference Architecture Diagram)
 * 7 Clean Sequential Stages: Requirements -> Design -> Develop -> Test -> Deploy -> Review -> Launch
 */

(function () {
  const cycleStages = document.querySelectorAll('.cycle-stage-interactive');
  const stageNumberBadge = document.getElementById('cycleStageNum');
  const stageTitle = document.getElementById('cycleStageTitle');
  const stageDesc = document.getElementById('cycleStageDesc');
  const stageDeliverables = document.getElementById('cycleStageDeliverables');
  const stageCadence = document.getElementById('cycleStageCadence');
  const stageOutcome = document.getElementById('cycleStageOutcome');

  if (!cycleStages.length) return;

  const stageData = {
    requirements: {
      num: 'PHASE 01 // INPUT VECTOR',
      title: 'Requirements Engineering & Vector Scope',
      desc: 'Formulating precise mathematical specifications and invariant boundaries. We translate ambitious business goals into structured user stories, data schemas, API contracts, and non-decreasing SLA targets.',
      deliverables: ['System Scope Blueprint', 'Invariant SLA Contracts', 'Database Schema Schematics', 'Security & Compliance Matrix'],
      cadence: 'Sprint 0 (1-2 Weeks)',
      outcome: 'Validated Technical Architecture Spec'
    },
    design: {
      num: 'PHASE 02 // ARCHITECTURE',
      title: 'Architecture Blueprint & System Design',
      desc: 'Constructing high-throughput distributed architectures tailored for extreme concurrency. Selecting optimal microservices, vector storage engines, and ultra-fast reactive frontend frameworks.',
      deliverables: ['Cloud Topology Blueprint', 'Vector Similarity Pipeline', 'CI/CD Pipeline Architecture', 'Security Boundary Defense'],
      cadence: 'Sprint 1',
      outcome: 'Production-Ready Architecture'
    },
    develop: {
      num: 'PHASE 03 // ENGINEERING',
      title: 'Core Development & Modular Assembly',
      desc: 'Rapid bi-weekly iterative engineering sprints. Our senior engineers craft clean, modular, self-documenting code with test-driven development (TDD) and continuous peer-reviewed integration.',
      deliverables: ['Modular Component Libraries', 'High-Throughput Vector APIs', 'Microservices Mesh', 'Real-Time Staging Demos'],
      cadence: 'Continuous Bi-Weekly Sprints',
      outcome: 'Feature-Complete SaaS Engine'
    },
    test: {
      num: 'PHASE 04 // VERIFICATION',
      title: 'Automated Testing & Chaos Engineering',
      desc: 'Guaranteeing zero regressions before code ever touches production. We execute automated unit suites, end-to-end integration journeys, load stress simulations, and automated penetration audits.',
      deliverables: ['100% Automated Test Suite', 'High-Concurrency Stress Report', 'Penetration & Security Audit', 'Accessibility (a11y) Certification'],
      cadence: 'Automated per Commit + Hardening',
      outcome: 'Zero-Regression Gold Release'
    },
    deploy: {
      num: 'PHASE 05 // DEPLOYMENT',
      title: 'Continuous Deployment & Rollout',
      desc: 'Executing smooth, zero-downtime canary deployments with instant automated rollback capabilities. We instrument end-to-end observability, real-time APM telemetry, and automated anomaly triggers.',
      deliverables: ['Zero-Downtime Blue/Green Rollout', 'Live APM Telemetry Dashboard', 'Automated Health Triggers', 'Infrastructure as Code (IaC)'],
      cadence: 'Continuous Deployment Pipeline',
      outcome: 'Resilient Multi-Region Mesh'
    },
    review: {
      num: 'PHASE 06 // OPTIMIZATION',
      title: 'Continuous Review & Monotonic Tuning',
      desc: 'Analyzing production telemetry to continuously optimize query execution plans, cache hit ratios, and cost efficiency—ensuring your technological velocity compounds with zero degradation.',
      deliverables: ['Telemetry Performance Audit', 'Cost-to-Scale Optimization', 'Automated Anomaly Reports', 'Sprint Retrospective Matrix'],
      cadence: 'Bi-Weekly Iteration Cycle',
      outcome: 'Compounding Upward Invariance'
    },
    launch: {
      num: 'PHASE 07 // OUTPUT VECTOR',
      title: 'Global Launch & Autonomous Scaling',
      desc: 'Final production orbit with global multi-region edge acceleration, enterprise SLAs, and a dedicated Solutions Architecture team providing proactive mid-journey co-piloting.',
      deliverables: ['Enterprise Production Orbit', 'Multi-Region CDN Edge CDN', '24/7 Monitored SLAs', 'Dedicated Solutions Co-Pilot'],
      cadence: 'Global Production Orbit',
      outcome: 'Live Mission-Critical Platform'
    }
  };

  function selectStage(stageKey) {
    // Remove active state from all stages
    cycleStages.forEach((st) => {
      st.classList.remove('active');
    });

    // Add active state to selected stage
    const activeElements = document.querySelectorAll(`.cycle-stage-interactive[data-stage="${stageKey}"]`);
    activeElements.forEach((el) => el.classList.add('active'));

    const data = stageData[stageKey];
    if (!data) return;

    if (stageNumberBadge) stageNumberBadge.textContent = data.num;
    if (stageTitle) stageTitle.textContent = data.title;
    if (stageDesc) stageDesc.textContent = data.desc;
    if (stageCadence) stageCadence.textContent = data.cadence;
    if (stageOutcome) stageOutcome.textContent = data.outcome;

    if (stageDeliverables) {
      stageDeliverables.innerHTML = data.deliverables
        .map((item) => `<span class="cycle-deliv-pill">✓ ${item}</span>`)
        .join('');
    }
  }

  cycleStages.forEach((stage) => {
    const stageKey = stage.getAttribute('data-stage');

    stage.addEventListener('click', (e) => {
      e.stopPropagation();
      selectStage(stageKey);
    });

    stage.addEventListener('touchstart', (e) => {
      selectStage(stageKey);
    }, { passive: true });
  });

  // Default selection: Requirements
  selectStage('requirements');
})();
