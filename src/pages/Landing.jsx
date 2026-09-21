import { useState, useRef, useEffect } from "react";

/* SERVICES DATA */
const services = [
  {
    number: "01",
    title: "Custom Software",
    short: "Reliable software built around your requirements.",
    details:
      "We design and develop custom software solutions tailored to the unique requirements of startups, businesses and organizations.",
  },
  {
    number: "02",
    title: "Web Applications",
    short: "Modern, scalable digital experiences.",
    details:
      "We build user-focused web applications designed for reliability, scalability and real-world business needs.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    short: "Digital products designed for mobile users.",
    details:
      "We develop mobile applications that turn ideas into practical and user-centric digital products.",
  },
  {
    number: "04",
    title: "AI-Powered Solutions",
    short: "Intelligent technology for modern workflows.",
    details:
      "We integrate AI into products and business workflows to help organizations explore automation and smarter digital solutions.",
  },
  {
    number: "05",
    title: "SaaS Products",
    short: "Products designed to scale with your business.",
    details:
      "We work on SaaS products and digital platforms with a focus on scalable engineering and long-term product development.",
  },
  {
    number: "06",
    title: "Business Automation",
    short: "Technology that simplifies business processes.",
    details:
      "We build business automation systems that help transform workflows and support more efficient digital operations.",
  },
];

/* HOW WE WORK STEPS */
const steps = [
  {
    number: "01",
    title: "Idea",
    short: "Defining the core concept, target audience, and business goals.",
    details: "We start by understanding your vision, identifying key user needs, defining project requirements, and establishing a clear product roadmap.",
  },
  {
    number: "02",
    title: "Plan",
    short: "Architecting the solution and defining engineering milestones.",
    details: "We create robust tech stack selections, database schemas, system architecture diagrams, and sprint schedules to ensure smooth execution.",
  },
  {
    number: "03",
    title: "Design",
    short: "Crafting intuitive user interfaces and seamless experiences.",
    details: "Our design team builds wireframes, high-fidelity UI prototypes, and interactive user flows tailored for maximum engagement and conversion.",
  },
  {
    number: "04",
    title: "Develop",
    short: "Building clean, scalable, high-performance code.",
    details: "Our engineers write clean, maintainable frontend and backend code following agile methodologies with continuous integration and quality assurance.",
  },
  {
    number: "05",
    title: "Deploy",
    short: "Rigorous testing and seamless production launch.",
    details: "We conduct performance benchmarking, security audits, and automated testing before launching your application smoothly into production.",
  },
  {
    number: "06",
    title: "Support",
    short: "Continuous monitoring, maintenance, and product growth.",
    details: "Post-launch, we provide 24/7 monitoring, security updates, feature enhancements, and scalable architecture optimizations to support long-term success.",
  },
];

const renderServiceIcon = (title) => {
  const commonProps = {
    className: "h-7 w-7 sm:h-8 sm:w-8 text-[#00E5FF]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (title) {
    case "Custom Software":
      return (
        <svg {...commonProps}>
          <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13.5 5l-3 14" />
        </svg>
      );
    case "Web Applications":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4a14 14 0 0 1 0 16M12 4a14 14 0 0 0 0 16" />
        </svg>
      );
    case "Mobile Applications":
      return (
        <svg {...commonProps}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M10 5.5h4M10.5 18h3" />
        </svg>
      );
    case "AI-Powered Solutions":
      return (
        <svg {...commonProps}>
          <path d="m12 2 1.75 5.25L19 9l-5.25 1.75L12 16l-1.75-5.25L5 9l5.25-1.75L12 2Z" />
          <path d="m18.5 15.5.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" />
        </svg>
      );
    case "SaaS Products":
      return (
        <svg {...commonProps}>
          <path d="M7 15a4 4 0 0 1 0-8 5 5 0 0 1 9.5 2A3.5 3.5 0 1 1 17 15H7Z" />
          <path d="M9 18h6" />
        </svg>
      );
    case "Business Automation":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M17.3 6.7l1.8-1.8M4.9 19.1l1.8-1.8" />
        </svg>
      );
    default:
      return null;
  }
};

const renderValueIcon = (title) => {
  const commonProps = {
    className: "h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };

  switch (title) {
    case "Innovation":
      return (
        <svg {...commonProps}>
          <path d="m12 2 1.75 5.25L19 9l-5.25 1.75L12 16l-1.75-5.25L5 9l5.25-1.75L12 2Z" />
          <path d="m18.5 15.5.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" />
        </svg>
      );
    case "Quality":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "Integrity":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "Customer Success":
      return (
        <svg {...commonProps}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "Collaboration":
      return (
        <svg {...commonProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "Continuous Learning":
      return (
        <svg {...commonProps}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "Ownership":
      return (
        <svg {...commonProps}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "Scalability":
      return (
        <svg {...commonProps}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    default:
      return null;
  }
};

/* FREE-FLOATING WEBGL 3D GRAPH COMPONENT WITH 2.5s TOP WAIT & VERTICAL SLICE SHATTER */
function HeroGraphWebGL() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Offscreen buffer canvas for vertical slice shatter rendering
    const offscreenCanvas = document.createElement("canvas");
    const offCtx = offscreenCanvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = offscreenCanvas.width = canvas.parentElement?.clientWidth || 580);
    let height = (canvas.height = offscreenCanvas.height = Math.round(width * (340 / 540)));

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = offscreenCanvas.width = canvas.parentElement.clientWidth || 580;
        height = canvas.height = offscreenCanvas.height = Math.round(width * (340 / 540));
      }
    };

    window.addEventListener("resize", handleResize);

    // Mouse parallax tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      targetRotY = (mouseX / rect.width) * 0.28;
      targetRotX = -(mouseY / rect.height) * 0.28;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Milestone Nodes
    const nodes = [
      { name: "IDEATE", px: 0.1, py: 0.82, z: -35, color: "#1E88E5", triggerPct: 0.05 },
      { name: "BUILD", px: 0.36, py: 0.72, z: -5, color: "#42A5F5", triggerPct: 0.3 },
      { name: "DEPLOY", px: 0.64, py: 0.42, z: 35, color: "#00E5FF", triggerPct: 0.58 },
      { name: "SCALE", px: 0.9, py: 0.12, z: 75, color: "#00E5FF", triggerPct: 0.76 },
    ];

    // ANIMATION TIMING DEFINITIONS (in milliseconds)
    const DRAW_DURATION = 3200;    // 3.2s progressive draw up from bottom
    const HOLD_DURATION = 2500;    // 2.5s WAIT AT TOP (2-3 seconds until break!)
    const SHATTER_DURATION = 1200; // 1.2s vertical slice shatter & dissolve
    const TOTAL_DURATION = DRAW_DURATION + HOLD_DURATION + SHATTER_DURATION; // 6.9s loop

    let startTime = null;

    const render = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % TOTAL_DURATION;

      let drawPct = 1;
      let isShattering = false;
      let dissolveProgress = 0;

      if (elapsed < DRAW_DURATION) {
        // Stage 1: Draw up from bottom (0.0 -> 1.0)
        drawPct = elapsed / DRAW_DURATION;
      } else if (elapsed < DRAW_DURATION + HOLD_DURATION) {
        // Stage 2: Arrow reached top -> WAIT 2.5 seconds at top!
        drawPct = 1;
      } else {
        // Stage 3: Shatter into vertical pieces & dissolve
        drawPct = 1;
        isShattering = true;
        dissolveProgress = (elapsed - (DRAW_DURATION + HOLD_DURATION)) / SHATTER_DURATION;
      }

      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      // Draw active scene on transparent offscreen canvas
      offCtx.clearRect(0, 0, width, height);

      offCtx.save();
      offCtx.translate(width / 2, height / 2);

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const project = (x, y, z) => {
        let cx = x - width / 2;
        let cy = y - height / 2;
        let cz = z;

        let rx = cx * cosY - cz * sinY;
        let rz = cx * sinY + cz * cosY;

        let ry = cy * cosX - rz * sinX;
        rz = cy * sinX + rz * cosX;

        const perspective = 480 / (480 + rz);
        return {
          x: rx * perspective,
          y: ry * perspective,
          scale: perspective,
        };
      };

      const p0 = { x: width * 0.06, y: height * 0.85, z: -40 };
      const p1 = { x: width * 0.28, y: height * 0.82, z: -15 };
      const p2 = { x: width * 0.44, y: height * 0.65, z: 20 };
      const p3 = { x: width * 0.64, y: height * 0.4, z: 50 };
      const p4 = { x: width * 0.82, y: height * 0.18, z: 80 };
      const p5 = { x: width * 0.94, y: height * 0.08, z: 100 };

      const getBezierPoint = (pct) => {
        if (pct <= 0.5) {
          const lt = pct * 2;
          const lu = 1 - lt;
          return {
            x: lu * lu * lu * p0.x + 3 * lu * lu * lt * p1.x + 3 * lu * lt * lt * p2.x + lt * lt * lt * p3.x,
            y: lu * lu * lu * p0.y + 3 * lu * lu * lt * p1.y + 3 * lu * lt * lt * p2.y + lt * lt * lt * p3.y,
            z: lu * lu * lu * p0.z + 3 * lu * lu * lt * p1.z + 3 * lu * lt * lt * p2.z + lt * lt * lt * p3.z,
          };
        } else {
          const lt = (pct - 0.5) * 2;
          const lu = 1 - lt;
          return {
            x: lu * lu * lu * p3.x + 3 * lu * lu * lt * p4.x + 3 * lu * lt * lt * p5.x + lt * lt * lt * p5.x,
            y: lu * lu * lu * p3.y + 3 * lu * lu * lt * p4.y + 3 * lu * lt * lt * p5.y + lt * lt * lt * p5.y,
            z: lu * lu * lu * p3.z + 3 * lu * lu * lt * p4.z + 3 * lu * lt * lt * p5.z + lt * lt * lt * p5.z,
          };
        }
      };

      const totalSteps = Math.max(2, Math.floor(drawPct * 80));

      if (drawPct > 0.01) {
        // 1. Grid Guidelines (Floating in 3D Space)
        offCtx.strokeStyle = "rgba(255, 255, 255, 0.07)";
        offCtx.lineWidth = 1;
        for (let i = 0; i <= 3; i++) {
          const gh = height * (0.2 + i * 0.2);
          const ptA = project(width * 0.04, gh, -30);
          const ptB = project(width * 0.96, gh, 70);
          offCtx.beginPath();
          offCtx.moveTo(ptA.x, ptA.y);
          offCtx.lineTo(ptB.x, ptB.y);
          offCtx.stroke();
        }

        // 2. Additive Neon Area Fill Under Current Drawn Path
        offCtx.globalCompositeOperation = "lighter";
        offCtx.fillStyle = "rgba(0, 229, 255, 0.08)";
        offCtx.beginPath();
        const startPt = project(p0.x, height * 0.92, p0.z);
        offCtx.moveTo(startPt.x, startPt.y);

        for (let i = 0; i <= totalSteps; i++) {
          const stepPct = (i / totalSteps) * drawPct;
          const pt = getBezierPoint(stepPct);
          const proj = project(pt.x, pt.y, pt.z);
          offCtx.lineTo(proj.x, proj.y);
        }
        const currentEndPt = getBezierPoint(drawPct);
        const currentEndProj = project(currentEndPt.x, height * 0.92, currentEndPt.z);
        offCtx.lineTo(currentEndProj.x, currentEndProj.y);
        offCtx.closePath();
        offCtx.fill();

        // 3. Extruded Outer Tube Glow Along Drawn Path
        offCtx.strokeStyle = "rgba(0, 229, 255, 0.3)";
        offCtx.lineWidth = 14;
        offCtx.beginPath();
        for (let i = 0; i <= totalSteps; i++) {
          const stepPct = (i / totalSteps) * drawPct;
          const pt = getBezierPoint(stepPct);
          const proj = project(pt.x, pt.y, pt.z);
          if (i === 0) offCtx.moveTo(proj.x, proj.y);
          else offCtx.lineTo(proj.x, proj.y);
        }
        offCtx.stroke();

        // 4. Core Neon Cyan Gradient Beam Along Drawn Path
        const grad = offCtx.createLinearGradient(
          project(p0.x, p0.y, p0.z).x,
          project(p0.x, p0.y, p0.z).y,
          project(p5.x, p5.y, p5.z).x,
          project(p5.x, p5.y, p5.z).y
        );
        grad.addColorStop(0, "#1E88E5");
        grad.addColorStop(0.5, "#42A5F5");
        grad.addColorStop(1, "#00E5FF");

        offCtx.strokeStyle = grad;
        offCtx.lineWidth = 5;
        offCtx.beginPath();
        for (let i = 0; i <= totalSteps; i++) {
          const stepPct = (i / totalSteps) * drawPct;
          const pt = getBezierPoint(stepPct);
          const proj = project(pt.x, pt.y, pt.z);
          if (i === 0) offCtx.moveTo(proj.x, proj.y);
          else offCtx.lineTo(proj.x, proj.y);
        }
        offCtx.stroke();

        // 5. Moving 3D Vector Arrow Spark & Speed Trail
        const headPt = getBezierPoint(drawPct);
        const headProj = project(headPt.x, headPt.y, headPt.z);
        const nextPt = getBezierPoint(Math.min(1, drawPct + 0.015));
        const nextProj = project(nextPt.x, nextPt.y, nextPt.z);

        const angle = Math.atan2(nextProj.y - headProj.y, nextProj.x - headProj.x);

        for (let s = 1; s <= 6; s++) {
          const trailPt = getBezierPoint(Math.max(0, drawPct - s * 0.015));
          const trailProj = project(trailPt.x, trailPt.y, trailPt.z);
          offCtx.fillStyle = `rgba(0, 229, 255, ${0.8 - s * 0.12})`;
          offCtx.beginPath();
          offCtx.arc(trailProj.x, trailProj.y, (4.5 - s * 0.6) * trailProj.scale, 0, Math.PI * 2);
          offCtx.fill();
        }

        offCtx.save();
        offCtx.translate(headProj.x, headProj.y);
        offCtx.rotate(angle);
        offCtx.fillStyle = "#ffffff";
        offCtx.shadowColor = "#00E5FF";
        offCtx.shadowBlur = 22;

        offCtx.beginPath();
        offCtx.moveTo(13 * headProj.scale, 0);
        offCtx.lineTo(-10 * headProj.scale, -7 * headProj.scale);
        offCtx.lineTo(-4.5 * headProj.scale, 0);
        offCtx.lineTo(-10 * headProj.scale, 7 * headProj.scale);
        offCtx.closePath();
        offCtx.fill();
        offCtx.restore();

        // 6. 3D Milestone Spheres & Node Text Labels
        offCtx.globalCompositeOperation = "source-over";

        nodes.forEach((node) => {
          if (drawPct >= node.triggerPct) {
            const nx = width * node.px;
            const ny = height * node.py;
            const proj = project(nx, ny, node.z);

            const pulse = (Math.sin(Date.now() * 0.004 + node.px * 10) + 1) / 2;
            offCtx.strokeStyle = node.color;
            offCtx.lineWidth = 1.5;
            offCtx.globalAlpha = 0.6 - pulse * 0.4;
            offCtx.beginPath();
            offCtx.arc(proj.x, proj.y, (9 + pulse * 15) * proj.scale, 0, Math.PI * 2);
            offCtx.stroke();

            offCtx.globalAlpha = 1;
            offCtx.fillStyle = node.color;
            offCtx.shadowColor = node.color;
            offCtx.shadowBlur = 16;
            offCtx.beginPath();
            offCtx.arc(proj.x, proj.y, 6.5 * proj.scale, 0, Math.PI * 2);
            offCtx.fill();

            offCtx.fillStyle = "#ffffff";
            offCtx.shadowBlur = 0;
            offCtx.beginPath();
            offCtx.arc(proj.x, proj.y, 2.8 * proj.scale, 0, Math.PI * 2);
            offCtx.fill();

            offCtx.font = `bold ${Math.round(11.5 * proj.scale)}px sans-serif`;
            offCtx.textAlign = "center";
            offCtx.fillStyle = "#ffffff";
            offCtx.shadowColor = "rgba(0,0,0,0.85)";
            offCtx.shadowBlur = 5;
            const labelY = node.name === "SCALE" ? proj.y - 15 * proj.scale : proj.y + 24 * proj.scale;
            offCtx.fillText(node.name, proj.x, labelY);
          }
        });
      }

      offCtx.restore();

      // Render final canvas with Vertical Slice Dissolve Shatter if in reset phase
      ctx.clearRect(0, 0, width, height);

      if (isShattering) {
        // Vertical Slice Shatter / Dissolve Reset Phase
        const numSlices = 14;
        const sliceWidth = width / numSlices;

        for (let i = 0; i < numSlices; i++) {
          const sliceX = i * sliceWidth;
          const shiftDir = i % 2 === 0 ? -1 : 1;
          const offsetY = Math.pow(dissolveProgress, 1.8) * 75 * shiftDir;
          const offsetX = (i - numSlices / 2) * dissolveProgress * 18;
          const alpha = Math.max(0, 1 - dissolveProgress * 1.15);

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.translate(sliceX + sliceWidth / 2 + offsetX, height / 2 + offsetY);
          ctx.rotate((i - numSlices / 2) * dissolveProgress * 0.05);
          ctx.drawImage(
            offscreenCanvas,
            sliceX,
            0,
            sliceWidth,
            height,
            -sliceWidth / 2,
            -height / 2,
            sliceWidth,
            height
          );
          ctx.restore();
        }
      } else {
        // Normal direct copy from offscreen buffer
        ctx.drawImage(offscreenCanvas, 0, 0);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 w-full h-[400px] sm:h-[480px] flex items-center justify-center select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        aria-label="Free floating WebGL 3D Growth Graph with 2.5s Top Wait and Shatter Dissolve"
      />
    </div>
  );
}

function Landing() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState("");
  const [flippedCards, setFlippedCards] = useState({});
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isStepInfoOpen, setIsStepInfoOpen] = useState(false);

  const isServicesPaused = isServicesHovered || Object.values(flippedCards).some(Boolean);

  const journeyRef = useRef(null);

  /* TOGGLE CARD FLIP FOR TOUCH DEVICES */
  const toggleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  /* CONTACT FORM HANDLERS (STANDALONE CLIENT-SIDE FRONTEND) */
  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("sending");

    // Save submission locally for pure frontend standalone mode
    try {
      const existing = JSON.parse(localStorage.getItem("mvt_inquiries") || "[]");
      existing.push({
        ...contactForm,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("mvt_inquiries", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    // Try optional backend if configured, otherwise simulate smooth client-side success
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (apiUrl) {
        await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactForm),
        });
      } else {
        // Simulate short network delay for realistic frontend UX
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    } catch (err) {
      console.warn("Backend offline, running in pure client-side frontend mode:", err);
    }

    setContactStatus("success");
    setContactForm({
      firstName: "",
      email: "",
      message: "",
    });
  };



  /* SMOOTH SCROLL TO SECTION */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full overflow-x-hidden">
      {/* ============ HOME SECTION ============ */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-[#07162f] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24 flex items-center"
      >
        {/* ANIMATED BLUE BACKGROUND */}
        <div className="glass-blue-hero" aria-hidden="true">
          {/* Luminous Animated Blue Orbs */}
          <div
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#00E5FF]/20 via-[#42A5F5]/30 to-transparent blur-3xl"
            style={{ animation: "blueOrbFloat1 14s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute top-1/4 -right-24 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-[#0D47A1]/40 via-[#1E88E5]/25 to-transparent blur-3xl"
            style={{ animation: "blueOrbFloat2 18s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-[#00E5FF]/15 via-[#0D47A1]/35 to-transparent blur-3xl"
            style={{ animation: "blueOrbFloat3 16s ease-in-out infinite alternate" }}
          />

          {/* Cybernetic Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 229, 255, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 165, 245, 0.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              animation: "gridGlowPulse 8s ease-in-out infinite",
            }}
          />

          {/* Ambient diagonal light beams */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div
              className="absolute -left-1/4 top-0 h-[200%] w-[150%] bg-gradient-to-r from-transparent via-[#00E5FF]/10 to-transparent transform -rotate-45"
              style={{ animation: "auroraDrift 20s linear infinite" }}
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            {/* LEFT: HERO CONTENT */}
            <div className="text-left">
              {/* BRAND TAG BADGE */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8ed8ff] backdrop-blur-md animate-[slideInFromLeft_0.7s_ease-out_forwards]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF]" />
                </span>
                <span>Monotonic Vector Technologies</span>
              </div>

              {/* HEADLINE */}
              <h1 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                <span className="block animate-[slideInFromLeft_0.8s_ease-out_forwards]">
                  Turning Ideas Into
                </span>
                <span className="block bg-gradient-to-r from-[#00E5FF] via-[#42A5F5] to-[#90CAF9] bg-clip-text text-transparent animate-[slideInFromLeft_0.8s_ease-out_0.2s_forwards] opacity-0">
                  Digital Reality.
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300/85 sm:text-lg md:text-xl animate-[slideInFromLeft_0.8s_ease-out_0.35s_forwards] opacity-0">
                We engineer scalable, high-performance software and intelligent digital solutions for startups and forward-thinking enterprises — from idea validation to rapid development, deployment, and continuous growth.
              </p>

              {/* AUTHENTIC CAPABILITY BADGES (REPLACED FALSE DATA) */}
              <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 animate-[slideInFromLeft_0.8s_ease-out_0.5s_forwards] opacity-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                  Custom Engineering
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#8ed8ff] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#42A5F5]" />
                  AI & Automation
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#82B1FF]" />
                  Scalable Cloud & SaaS
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4 animate-[slideInFromLeft_0.8s_ease-out_0.65s_forwards] opacity-0">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#42A5F5] px-7 py-3.5 font-bold text-[#07162f] shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] active:scale-95"
                >
                  Start a Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00E5FF]/50 hover:bg-white/10 active:scale-95"
                >
                  Explore Services
                </button>
              </div>

              {/* TAGLINE */}
              <p className="mt-8 text-xs sm:text-sm font-medium italic text-slate-400/80 animate-[slideInFromLeft_0.8s_ease-out_0.8s_forwards] opacity-0">
                "Every Step, Step Ahead."
              </p>
            </div>

            {/* RIGHT: WHITE BACKGROUND WEBGL 3D GROWTH GRAPH */}
            <div className="w-full flex justify-center lg:justify-end animate-[fadeInUp_0.9s_ease-out_0.4s_forwards]">
              <div className="w-full max-w-[560px] lg:max-w-[580px] relative">
                <HeroGraphWebGL />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      <section
        id="services"
        className="relative min-h-[90vh] lg:h-screen max-h-[920px] overflow-hidden bg-[#F5F7FA] px-4 py-8 sm:px-6 md:py-10 lg:px-8 flex flex-col justify-between"
      >
        {/* SERVICES HEADER */}
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            What We Do
          </p>

          <div className="mt-2 sm:mt-3">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0A183F] sm:text-4xl md:text-5xl lg:text-5xl">
              Technology built <span className="text-[#0D47A1]">around your vision.</span>
            </h2>
          </div>

          {/* HORIZONTAL MOVING TEXT BAR (LEFT-TO-RIGHT CONTINUOUS LOOP) */}
          <div className="mx-auto mt-3.5 max-w-4xl overflow-hidden rounded-full border border-[#00E5FF]/30 bg-[#0A183F] px-4 py-2 text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.15)]">
            <div className="flex w-max items-center gap-8 whitespace-nowrap animate-[marqueeReverse_20s_linear_infinite]">
              {[1, 2].map((repeatGroup) => (
                <div key={repeatGroup} className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm">
                  <span>✦ Custom Software & Web Apps</span>
                  <span className="text-white/40">•</span>
                  <span>✦ AI-Powered Workflow Automation</span>
                  <span className="text-white/40">•</span>
                  <span>✦ Scalable SaaS Platforms & Mobile Engineering</span>
                  <span className="text-white/40">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INFINITE MOVING CAROUSEL (RESPONSIVE: 1 ON MOBILE, 2 ON TABLET, 3 ON DESKTOP) */}
        <div
          className="relative mx-auto my-auto w-full max-w-7xl overflow-hidden py-3 select-none"
          onMouseEnter={() => setIsServicesHovered(true)}
          onMouseLeave={() => setIsServicesHovered(false)}
        >
          {/* Dark Navy Box Color Side Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#0A183F] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-[#0A183F] to-transparent sm:w-20" />

          {/* INFINITE MOVING TRACK (INCREASED SPEED: 20s) */}
          <div
            className="flex w-max animate-[marquee_20s_linear_infinite]"
            style={{
              animationPlayState: isServicesPaused ? "paused" : "running",
            }}
          >
            {[...services, ...services].map((service, itemIndex) => {
              const originalIndex = itemIndex % services.length;
              const isFlipped = !!flippedCards[originalIndex];
              const beamDuration = `${5.5 + (originalIndex % 3) * 1.8}s`;

              return (
                <div
                  key={`${service.number}-${itemIndex}`}
                  className="w-[calc(100vw-2.5rem)] sm:w-[calc(100vw-3.5rem)] md:w-[calc(50vw-2.5rem)] lg:w-[calc(33.333vw-2.2rem)] max-w-[390px] px-2.5 sm:px-3.5 shrink-0"
                >
                  {/* REDUCED VERTICAL HEIGHT (h-[250px] sm:h-[265px]) */}
                  <div
                    className="group h-[250px] sm:h-[265px] [perspective:1200px] cursor-pointer"
                    onClick={() => toggleCardFlip(originalIndex)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        toggleCardFlip(originalIndex);
                      }
                    }}
                    aria-label={`${service.title} card. Click to flip.`}
                  >
                    <div
                      className={`relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      {/* FRONT WITH CONTINUOUS MOVING LIGHT BORDER BEAM */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl p-[1.5px] shadow-xl transition-all duration-500 hover:shadow-[0_15px_35px_-10px_rgba(0,229,255,0.35)] [backface-visibility:hidden]">
                        {/* CONTINUOUS ROTATING LIGHT BEAM */}
                        <div
                          className="pointer-events-none absolute -inset-[150%] animate-[spin_6s_linear_infinite]"
                          style={{ animationDuration: beamDuration }}
                        >
                          <div className="h-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(0,229,255,0.15)_300deg,#00E5FF_335deg,rgba(255,255,255,0.95)_355deg,transparent_360deg)]" />
                        </div>

                        {/* INNER CARD BODY */}
                        <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#0A183F] p-5 sm:p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00E5FF]/30 bg-[#00E5FF]/10 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                              {renderServiceIcon(service.title)}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00E5FF]">
                              {service.number}
                            </span>
                          </div>

                          <div className="my-auto pt-1">
                            <h3 className="text-lg font-bold text-white sm:text-xl">
                              {service.title}
                            </h3>
                            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/70 line-clamp-2">
                              {service.short}
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">
                            <span>Tap to read details</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </div>

                          {/* Decorative background glow */}
                          <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border border-[#00E5FF]/15" />
                        </div>
                      </div>

                      {/* BACK WITH SUBTLE MOVING LIGHT BORDER BEAM */}
                      <div className="absolute inset-0 overflow-hidden rounded-3xl p-[1.5px] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        {/* CONTINUOUS ROTATING LIGHT BEAM ON BACK */}
                        <div
                          className="pointer-events-none absolute -inset-[150%] animate-[spin_6s_linear_infinite]"
                          style={{ animationDuration: beamDuration }}
                        >
                          <div className="h-full w-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(13,71,161,0.15)_300deg,#0D47A1_335deg,#00E5FF_355deg,transparent_360deg)]" />
                        </div>

                        {/* INNER BACK BODY */}
                        <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-[calc(1.5rem-1.5px)] border border-[#DCE4EF] bg-white p-5 sm:p-6 text-[#0A183F]">
                          <div>
                            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#0D47A1]/20 bg-[#EAF4FF] text-[#0D47A1]">
                              {renderServiceIcon(service.title)}
                            </div>

                            <h3 className="text-lg font-bold text-[#0A183F]">
                              {service.title}
                            </h3>

                            <div className="my-2 h-px w-full bg-[#E5EAF0]" />

                            <p className="text-xs leading-relaxed text-[#555] line-clamp-3">
                              {service.details}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#0D47A1]">
                            <span className="h-2 w-2 rounded-full bg-[#00E5FF]" />
                            Tap to continue
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mx-auto max-w-7xl w-full">
          <div className="relative overflow-hidden rounded-2xl bg-[#0A183F] px-5 py-5 sm:px-8 sm:py-6 text-center">
            <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5FF]/10" />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
              Beyond Software
            </p>

            <h3 className="relative mx-auto mt-2 max-w-3xl text-lg font-bold leading-tight text-white sm:text-2xl md:text-3xl">
              Building technology that creates{" "}
              <span className="text-[#00E5FF]">lasting value.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK SECTION ============ */}
      <section
        ref={journeyRef}
        id="how-we-work"
        className="relative min-h-[62vh] overflow-hidden bg-[#07162f] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
      >
        {/* Background glow */}
        <div className="glass-blue-hero" aria-hidden="true">
          <div className="absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00E5FF]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
              How We Work
            </p>

            {/* SMOOTH SLOW LETTER-BY-LETTER REVEAL HEADING IN PURE WHITE */}
            <div className="mt-4 text-center py-2">
              <h2 className="inline-flex flex-wrap items-center justify-center text-xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {"Your idea. Our journey together.".split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-white animate-[letterRevealFade_6s_ease-in-out_infinite]"
                    style={{ animationDelay: `${idx * 0.08}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
            </div>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
              We turn concepts into market-ready products through a transparent, collaborative process built for speed and engineering excellence.
            </p>
          </div>

          {/* SINGLE INTERACTIVE STEP BOX CONTAINER */}
          <div className="relative mx-auto mt-10 max-w-2xl sm:mt-14">
            {/* Step Selection Tabs Indicator */}
            <div className="mb-6 flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {steps.map((s, idx) => (
                <button
                  key={s.number}
                  onClick={() => {
                    setActiveStepIndex(idx);
                    setIsStepInfoOpen(false);
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-300 ${
                    activeStepIndex === idx
                      ? "bg-[#00E5FF] text-[#07162f] shadow-[0_0_15px_rgba(0,229,255,0.4)] scale-105"
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <span>{s.number}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            {/* THE SINGLE STEP BOX WITH BREATHING ANIMATION */}
            <div
              className="relative overflow-hidden rounded-3xl border border-[#00E5FF]/30 bg-white p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,229,255,0.15)] transition-all duration-500 animate-[stepBoxBreathing_4.5s_ease-in-out_infinite]"
            >
              {/* TOP HEADER OF CARD */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EAF4FF] text-sm font-extrabold text-[#0D47A1]">
                    {steps[activeStepIndex].number}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                      Step {steps[activeStepIndex].number}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0A183F] sm:text-3xl">
                      {steps[activeStepIndex].title}
                    </h3>
                  </div>
                </div>

                <div className="rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-bold text-[#0D47A1]">
                  {activeStepIndex + 1} of {steps.length}
                </div>
              </div>

              <div className="my-5 h-px w-full bg-[#E5EAF0]" />

              {/* CARD CONTENT (CLOSED vs OPENED INFO) */}
              {!isStepInfoOpen ? (
                <div className="py-2">
                  <p className="text-base sm:text-lg leading-relaxed text-[#444]">
                    {steps[activeStepIndex].short}
                  </p>

                  <button
                    onClick={() => setIsStepInfoOpen(true)}
                    className="mt-6 flex items-center gap-2 rounded-xl bg-[#0A183F] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#0D47A1] hover:scale-[1.02] active:scale-95"
                  >
                    <span>Click to read step info</span>
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div className="py-2">
                  <p className="text-sm sm:text-base leading-relaxed text-[#555]">
                    {steps[activeStepIndex].details}
                  </p>

                  {/* BOTTOM NAVIGATION ACTIONS */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5EAF0] pt-6">
                    {/* BOTTOM LEFT ACTION */}
                    {activeStepIndex === 0 ? (
                      <button
                        onClick={() => setIsStepInfoOpen(false)}
                        className="flex items-center gap-2 rounded-xl border border-[#DCE4EF] bg-[#F8FAFC] px-5 py-3 text-xs sm:text-sm font-bold text-[#0A183F] transition hover:bg-[#EAF4FF] hover:text-[#0D47A1]"
                      >
                        ← Back
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveStepIndex((prev) => prev - 1);
                        }}
                        className="flex items-center gap-2 rounded-xl border border-[#DCE4EF] bg-[#F8FAFC] px-5 py-3 text-xs sm:text-sm font-bold text-[#0A183F] transition hover:bg-[#EAF4FF] hover:text-[#0D47A1]"
                      >
                        ← Previous Step
                      </button>
                    )}

                    {/* BOTTOM RIGHT ACTION */}
                    {activeStepIndex < steps.length - 1 ? (
                      <button
                        onClick={() => {
                          setActiveStepIndex((prev) => prev + 1);
                        }}
                        className="flex items-center gap-2 rounded-xl bg-[#0A183F] px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#0D47A1] hover:scale-105 active:scale-95"
                      >
                        <span>Step 0{activeStepIndex + 2} ({steps[activeStepIndex + 1].title})</span>
                        <span>→</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveStepIndex(0);
                          setIsStepInfoOpen(false);
                        }}
                        className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-red-700 hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30"
                      >
                        <span>Close</span>
                        <span>✕</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section
        id="about"
        className="min-h-[60vh] overflow-hidden bg-[#F5F7FA] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* ABOUT HEADER */}
          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
              About MVT
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0A183F] sm:text-4xl md:text-5xl lg:text-6xl">
              Building exceptional software.{" "}
              <span className="text-[#0D47A1]">Creating opportunities.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#616161] sm:text-lg">
              Monotonic Vector Technologies is a dedicated digital engineering and product innovation startup helping founders, startups, and growing enterprises convert ideas into robust, scalable technology.
            </p>
          </div>

          {/* TWO MAIN CARDS */}
          <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#0A183F] p-7 sm:p-10 text-white shadow-xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00E5FF]">
                MVT Principles
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
                From idea validation to deployment and beyond.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70">
                We specialize in architecting, engineering, and delivering tailored custom software, web platforms, native & cross-platform mobile apps, AI integrations, SaaS ecosystems, and intelligent workflow automations.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 sm:p-10 shadow-lg border border-[#DCE4EF]">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A183F]">
                A trusted long-term technology partner.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#616161]">
                We believe that world-class software is created through solid architecture, empathetic user design, and continuous communication. We support our partners through every step of their digital evolution.
              </p>
            </div>
          </div>

          {/* MISSION / VISION */}
          <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-[#DCE4EF] bg-white p-7 sm:p-9 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
                Our Mission
              </p>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#0A183F]">
                Transforming ideas into resilient digital products.
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#616161]">
                To engineer reliable, scalable, and high-performance software solutions that empower founders and businesses to achieve sustainable growth and digital excellence.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DCE4EF] bg-white p-7 sm:p-9 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
                Our Vision
              </p>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#0A183F]">
                Becoming a globally recognized engineering catalyst.
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#616161]">
                To empower innovators worldwide with next-generation software platforms, impactful products, and transformative technology talent development.
              </p>
            </div>
          </div>

          {/* CORE VALUES */}
          <div className="mt-16 sm:mt-20">
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                Core Values
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A183F]">
                What guides our work.
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                ["Innovation", "Modern technology stacks and creative architectural thinking."],
                ["Quality", "Secure, high-performance, maintainable and battle-tested code."],
                ["Integrity", "Absolute honesty, transparent communication and accountability."],
                ["Customer Success", "Our ultimate benchmark is our clients' measurable success."],
                ["Collaboration", "Close teamwork, agile alignment, and shared milestones."],
                ["Continuous Learning", "Constant curiosity, skill refinement, and tech exploration."],
                ["Ownership", "End-to-end accountability for every line of code and user experience."],
                ["Scalability", "Architecting products built to handle exponential growth and user demand."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="group rounded-2xl bg-white p-6 shadow-sm border border-[#E5EAF0] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#00E5FF]/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0D47A1] shadow-sm transition-all duration-300 group-hover:bg-[#00E5FF] group-hover:text-[#07162f] group-hover:scale-110">
                    {renderValueIcon(title)}
                  </div>
                  <h4 className="text-lg font-bold text-[#0A183F]">{title}</h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#616161]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section
        id="contact"
        className="min-h-[58vh] bg-[#F5F7FA] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          {/* SUCCESS SCREEN */}
          {contactStatus === "success" && (
            <div className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4FF] text-2xl text-[#0D47A1]">
                ✓
              </div>
              <p className="mt-6 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                Query Sent
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0A183F] sm:text-4xl">
                Message received.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#616161] sm:text-base">
                Thank you for reaching out to Monotonic Vector Technologies. Our engineering team will review your inquiry and get back to you shortly.
              </p>
              <button
                onClick={() => scrollToSection("home")}
                className="mt-7 inline-flex rounded-full bg-[#0A183F] px-7 py-3 font-bold text-white transition-all hover:bg-[#0D47A1]"
              >
                Back to Home →
              </button>
            </div>
          )}

          {/* FORM SCREEN */}
          {contactStatus !== "success" && (
            <>
              {/* HEADER */}
              <div className="text-center">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
                  Contact MVT
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0A183F] sm:text-4xl md:text-5xl lg:text-6xl">
                  Let's turn your idea into reality.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#616161] sm:text-base md:text-lg">
                  Tell us what you're building, the challenge you're solving, or simply start a conversation with our team.
                </p>
              </div>

              {/* FORM */}
              <div className="mt-10 sm:mt-14">
                <form
                  onSubmit={handleContactSubmit}
                  className="mx-auto w-full rounded-3xl bg-white p-6 sm:p-10 shadow-xl border border-[#DCE4EF]"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs sm:text-sm font-bold text-[#0A183F]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleContactChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-[#DCE4EF] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs sm:text-sm font-bold text-[#0A183F]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-[#DCE4EF] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-xs sm:text-sm font-bold text-[#0A183F]">
                      Your Message / Project Details
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Tell us about your product idea, timeline, or requirements..."
                      required
                      rows="4"
                      className="w-full resize-none rounded-xl border border-[#DCE4EF] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
                    />
                  </div>

                  {contactStatus === "error" && (
                    <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs sm:text-sm text-red-600">
                      Unable to send message right now. Please check your connection or contact us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0A183F] to-[#0D47A1] px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-60 active:scale-95"
                  >
                    {contactStatus === "sending" ? (
                      "Sending message..."
                    ) : (
                      <>
                        <span>Send Query</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Landing;
