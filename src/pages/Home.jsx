import { useEffect, useRef } from "react";

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    // =========================
    // ORIGINAL CSS
    // =========================
    const style = document.createElement("style");

    style.textContent = `
      /* Put the original CSS here */

      /* Your new 4-card process carousel */
      .process-carousel {
        position: relative;
        width: 100%;
        max-width: 620px;
        height: 500px;
        overflow: hidden;
        border-radius: 28px;
      }

      .process-card {
        position: absolute;
        inset: 0;
        opacity: 0;
        transform: translateX(40px) scale(.96);
        transition:
          opacity .7s ease,
          transform .7s ease;
        pointer-events: none;
        border-radius: 28px;
        overflow: hidden;
        background: #f1f3f2;
      }

      .process-card.active {
        opacity: 1;
        transform: translateX(0) scale(1);
        pointer-events: auto;
      }

      .process-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .process-card-content {
        position: absolute;
        left: 24px;
        right: 24px;
        bottom: 24px;
        padding: 20px;
        border-radius: 20px;
        background: rgba(255,255,255,.9);
        backdrop-filter: blur(15px);
      }

      .process-card-content span {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: .12em;
        opacity: .6;
      }

      .process-card-content h3 {
        margin: 6px 0 0;
        font-size: 28px;
      }

      .process-dots {
        position: absolute;
        z-index: 10;
        left: 24px;
        bottom: 24px;
        display: flex;
        gap: 7px;
      }

      .process-dot {
        width: 8px;
        height: 8px;
        border: 0;
        border-radius: 50%;
        background: rgba(0,0,0,.25);
        cursor: pointer;
      }

      .process-dot.active {
        width: 28px;
        border-radius: 10px;
        background: #111;
      }

      @media (max-width: 768px) {
        .process-carousel {
          height: 400px;
        }
      }
    `;

    document.head.appendChild(style);

    // =========================
    // SINGLE HTML
    // =========================
    pageRef.current.innerHTML = `
      <main>

        <!-- HERO / EXISTING CONTENT -->
        <section class="hero">
          <!-- Your existing hero HTML -->
        </section>


        <!-- PROCESS -->
        <section class="process-section">

          <div class="process-carousel">

            <article class="process-card active">
              <img
                src="/inner-green-assets/plan.jpg"
                alt="Plan"
              />

              <div class="process-card-content">
                <span>01</span>
                <h3>Plan</h3>
              </div>
            </article>


            <article class="process-card">
              <img
                src="/inner-green-assets/build.jpg"
                alt="Build"
              />

              <div class="process-card-content">
                <span>02</span>
                <h3>Build</h3>
              </div>
            </article>


            <article class="process-card">
              <img
                src="/inner-green-assets/deploy.jpg"
                alt="Deploy"
              />

              <div class="process-card-content">
                <span>03</span>
                <h3>Deploy</h3>
              </div>
            </article>


            <article class="process-card">
              <img
                src="/inner-green-assets/scale.jpg"
                alt="Scale"
              />

              <div class="process-card-content">
                <span>04</span>
                <h3>Scale</h3>
              </div>
            </article>


            <div class="process-dots">

              <button
                class="process-dot active"
                data-index="0"
              ></button>

              <button
                class="process-dot"
                data-index="1"
              ></button>

              <button
                class="process-dot"
                data-index="2"
              ></button>

              <button
                class="process-dot"
                data-index="3"
              ></button>

            </div>

          </div>

        </section>

      </main>
    `;


    // =========================
    // JAVASCRIPT
    // =========================

    const cards = pageRef.current.querySelectorAll(".process-card");
    const dots = pageRef.current.querySelectorAll(".process-dot");

    let current = 0;
    let interval;

    function showCard(index) {
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      current = index;
    }

    function nextCard() {
      const next = (current + 1) % cards.length;
      showCard(next);
    }

    function startCarousel() {
      interval = setInterval(nextCard, 4200);
    }

    function stopCarousel() {
      clearInterval(interval);
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showCard(Number(dot.dataset.index));
      });
    });

    const carousel =
      pageRef.current.querySelector(".process-carousel");

    carousel.addEventListener("mouseenter", stopCarousel);
    carousel.addEventListener("mouseleave", startCarousel);

    startCarousel();


    // =========================
    // CLEANUP
    // =========================

    return () => {
      stopCarousel();
      style.remove();
    };

  }, []);

  return <div ref={pageRef} />;
}