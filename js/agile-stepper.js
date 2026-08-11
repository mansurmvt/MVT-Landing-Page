/**
 * SECTION 6: AGILE DEVELOPMENT LIFECYCLE STEPPER
 * Step 1 to Launching & 24/7 Monitoring
 */

(function () {
  const stepTabs = document.querySelectorAll('.agile-step-tab');
  const stepNumber = document.getElementById('agileStepNumber');
  const stepTitle = document.getElementById('agileStepTitle');
  const stepDesc = document.getElementById('agileStepDesc');
  const stepDeliverables = document.getElementById('agileStepDeliverables');
  const stepDuration = document.getElementById('agileStepDuration');
  const stepOutput = document.getElementById('agileStepOutput');

  if (!stepTabs.length) return;

  const stepsData = [
    {
      num: 'STEP 01',
      tabTitle: 'Project Discovery',
      title: 'Project Inception & Core Problem Discovery',
      desc: 'We start by conducting deep stakeholder workshops to dissect your business objectives, map out end-user workflows, define invariant data boundaries, and establish quantitative ROI benchmarks.',
      deliverables: ['System Scope Blueprint', 'User Persona Vectors', 'ROI & KPI Matrix', 'Risk & Feasibility Audit'],
      duration: 'Sprint 0 (1-2 Weeks)',
      output: 'Discovery & Vector Scope Document'
    },
    {
      num: 'STEP 02',
      tabTitle: 'Requirements',
      title: 'Requirements Engineering & Vector Specs',
      desc: 'Translating high-level ambitions into deterministic technical specifications. We define non-decreasing SLA guarantees, data schema models, microservice API contracts, and prioritized user stories.',
      deliverables: ['Detailed SRS Specification', 'Database ERD & Vector Schemas', 'API Contract Definitions', 'Security Compliance Plan'],
      duration: 'Week 2-3',
      output: 'Validated Technical Architecture Spec'
    },
    {
      num: 'STEP 03',
      tabTitle: 'Stack Selection',
      title: 'Architecture & Technology Stack Selection',
      desc: 'Selecting battle-tested modern tech stacks tailored to your throughput needs—pairing high-performance backend engines (Rust/Go/Node) with distributed vector databases and lightning-fast frontend frameworks.',
      deliverables: ['Cloud Infrastructure Blueprint', 'Framework & Library Matrix', 'DevOps & CI/CD Pipeline Design', 'Security Boundary Topology'],
      duration: 'Week 3-4',
      output: 'Production Architecture Topology'
    },
    {
      num: 'STEP 04',
      tabTitle: 'Agile Building',
      title: 'Agile Sprint Engineering & Modular Assembly',
      desc: 'Iterative, high-velocity bi-weekly sprints. Our senior engineers craft clean, modular, self-documenting code with continuous peer review, test-driven development (TDD), and live staging demos at every iteration.',
      deliverables: ['Bi-Weekly Working Releases', 'Clean Component Libraries', 'Microservices Mesh', 'Real-Time Staging Previews'],
      duration: 'Sprints 1-N (Continuous)',
      output: 'Feature-Complete SaaS Core'
    },
    {
      num: 'STEP 05',
      tabTitle: 'Testing & QA',
      title: 'Rigorous Automated & Stress Testing',
      desc: 'Ensuring zero regressions before code ever touches production. We execute automated unit suites, end-to-end integration journeys, high-concurrency load simulations, and automated penetration security scans.',
      deliverables: ['100% Automated Test Suite', 'Chaos & Concurrency Load Report', 'Penetration & Security Audit', 'Accessibility (a11y) Certification'],
      duration: 'Continuous CI/CD + Hardening',
      output: 'Zero-Regression Gold Release'
    },
    {
      num: 'STEP 06',
      tabTitle: 'Launch & Telemetry',
      title: 'Production Launching, Telemetry & Monitoring',
      desc: 'Smooth, zero-downtime production deployment with progressive canary rollouts. We instrument end-to-end observability, APM metrics, intelligent anomaly alerting, and proactive mid-journey support.',
      deliverables: ['Zero-Downtime Blue/Green Deploy', '24/7 Real-Time APM Dashboard', 'Automated Failover Protocols', 'Dedicated Engineering Co-Pilot'],
      duration: 'Launch Day & Continuous Orbit',
      output: 'Live Mission-Critical Platform'
    }
  ];

  function activateStep(index) {
    stepTabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    const step = stepsData[index];
    if (stepNumber) stepNumber.textContent = step.num;
    if (stepTitle) stepTitle.textContent = step.title;
    if (stepDesc) stepDesc.textContent = step.desc;
    if (stepDuration) stepDuration.textContent = step.duration;
    if (stepOutput) stepOutput.textContent = step.output;

    if (stepDeliverables) {
      stepDeliverables.innerHTML = step.deliverables
        .map((item) => `<span class="step-deliv-pill">✓ ${item}</span>`)
        .join('');
    }
  }

  stepTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      activateStep(idx);
    });
  });

  // Init Step 0
  activateStep(0);
})();
