import { useEffect } from "react";
import scrollToContact from "../../utils/scrollToContact";
import OrbitalGraphic from "../orbitalGraphic/OrbitalGraphic";
import SectionHeading from "../ui/SectionHeading";
import SystemMap from "../systemMap/SystemMap";
import "./homepage.css";

const visualLabels = {
  commerce: ["Catalog", "API", "WebView", "UI Kit"],
  cloud: ["Access", "Cluster", "Jobs", "OpenAPI"],
  education: ["Flow", "UI Kit", "Modules", "Adaptive"],
  ai: ["Research", "Data", "RAG", "Roadmap"],
};

const marqueeItems = [
  "Product design",
  "Fullstack engineering",
  "AI systems",
  "Production delivery",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="button__icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

function Metric({ metric }) {
  const isCompactValue = metric.value.length > 9;
  const counterProps = Number.isFinite(metric.number)
    ? {
        "data-counter": metric.number,
        "data-prefix": metric.prefix || "",
        "data-suffix": metric.suffix || "",
      }
    : {};

  return (
    <div className="case-card__metric">
      <span
        className={`ui-span case-card__metric-value ${
          isCompactValue ? "case-card__metric-value--compact" : ""
        }`}
        {...counterProps}
      >
        {metric.value}
      </span>
      <span className="ui-span case-card__metric-label">{metric.label}</span>
    </div>
  );
}

function CaseVisual({ type, index }) {
  const labels = visualLabels[type];

  return (
    <div className={`case-visual case-visual--${type}`} aria-hidden="true">
      <div className="case-visual__grid" />
      <div className="case-visual__orbit case-visual__orbit--outer" />
      <div className="case-visual__orbit case-visual__orbit--inner" />
      <div className="case-visual__core">
        <span className="ui-span case-visual__core-index">{index}</span>
        <span className="ui-span case-visual__core-label">System</span>
      </div>
      {labels.map((label, nodeIndex) => (
        <div
          className={`case-visual__node case-visual__node--${nodeIndex + 1}`}
          key={label}
          style={{ "--node-delay": `${nodeIndex * -480}ms` }}
        >
          <span className="ui-span case-visual__node-dot" />
          <span className="ui-span case-visual__node-label">{label}</span>
        </div>
      ))}
      <div className="case-visual__scanner" />
    </div>
  );
}

function CaseCard({ caseStudy, labels, order }) {
  return (
    <article
      className="case-card"
      style={{ "--case-top": `${104 + order * 14}px` }}
    >
      <div
        className="case-card__visual"
        data-ambient
        data-reveal="scale"
        style={{ "--motion-delay": "40ms" }}
      >
        <CaseVisual index={caseStudy.index} type={caseStudy.visual} />
      </div>

      <div className="case-card__content">
        <div
          className="case-card__meta"
          data-reveal="clip"
          style={{ "--motion-delay": "80ms" }}
        >
          <span className="ui-span case-card__index">{caseStudy.index}</span>
          <span className="ui-span case-card__category">
            {caseStudy.category}
          </span>
        </div>

        <h3
          className="ui-title case-card__title"
          data-reveal="clip"
          style={{ "--motion-delay": "140ms" }}
        >
          {caseStudy.title}
        </h3>
        <p
          className="case-card__description"
          data-reveal
          style={{ "--motion-delay": "200ms" }}
        >
          {caseStudy.description}
        </p>
        <p
          className="case-card__responsibility"
          data-reveal
          style={{ "--motion-delay": "260ms" }}
        >
          <span className="ui-span case-card__responsibility-label">
            {labels.role}
          </span>
          {caseStudy.responsibility}
        </p>

        <div
          className={`case-card__metrics ${
            caseStudy.metrics.length === 2 ? "case-card__metrics--wide" : ""
          }`}
          data-reveal
          style={{ "--motion-delay": "320ms" }}
          aria-label={labels.results}
        >
          {caseStudy.metrics.map((metric) => (
            <Metric key={`${metric.value}-${metric.label}`} metric={metric} />
          ))}
        </div>

        <div
          className="tag-list"
          data-reveal
          style={{ "--motion-delay": "380ms" }}
          aria-label={labels.technologies}
        >
          {caseStudy.stack.map((technology) => (
            <span className="ui-span tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function MarqueeBand() {
  return (
    <div className="marquee-band" data-ambient aria-hidden="true">
      <div className="marquee-band__track">
        {[0, 1].map((group) => (
          <div className="marquee-band__group" key={group}>
            {marqueeItems.map((item) => (
              <span className="ui-span marquee-band__item" key={`${group}-${item}`}>
                {item}
                <span className="ui-span marquee-band__dot">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StackGroup({ group }) {
  return (
    <div className="stack-group" data-reveal>
      <span className="ui-span stack-group__label">{group.label}</span>
      <div
        className="stack-group__items"
        aria-label={`${group.label}: ${group.items.join(", ")}`}
      >
        {group.items.map((item) => (
          <span className="ui-span stack-chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage({ content }) {
  const {
    aiCapabilities,
    caseStudies,
    expertiseItems,
    home,
    processSteps,
    serviceItems,
    stackGroups,
  } = content;

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main id="main-content">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__mesh" aria-hidden="true" />
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />

        <div className="site-container hero__layout">
          <div className="hero__content">
            <div className="hero__status hero-enter hero-enter--1">
              <span className="ui-span status-dot" aria-hidden="true" />
              <span className="ui-span eyebrow">
                {home.hero.role}
              </span>
            </div>

            <h1 className="ui-title hero__title" id="hero-title">
              <span className="ui-span hero__title-line hero-enter hero-enter--2">
                {home.hero.titleLines[0]}
              </span>
              <span className="ui-span hero__title-line hero__title-line--gradient hero-enter hero-enter--3">
                {home.hero.titleLines[1]}
              </span>
              <span className="ui-span hero__title-line hero__title-line--small hero-enter hero-enter--4">
                {home.hero.titleLines[2]}
              </span>
            </h1>

            <p className="hero__lead hero-enter hero-enter--5">
              {home.hero.lead}
            </p>

            <div className="hero__actions hero-enter hero-enter--6">
              <a
                className="ui-button button button--primary"
                href="#contact"
                onClick={scrollToContact}
              >
                {home.hero.primaryCta}
                <ArrowIcon />
              </a>
              <a
                className="ui-button button button--secondary"
                href="#cases"
              >
                {home.hero.secondaryCta}
              </a>
            </div>

            <div
              aria-label={home.hero.proofLabel}
              className="hero__proof hero-enter hero-enter--7"
            >
              <span className="ui-span hero__proof-item">
                {home.hero.proof}
              </span>
            </div>
          </div>

          <div className="hero__visual hero-enter hero-enter--visual">
            <OrbitalGraphic />
            <div className="hero__visual-hud" aria-hidden="true">
              <span className="ui-span hero__visual-hud-index">01 / 04</span>
              <span className="ui-span hero__visual-hud-label">
                Product · System · Delivery
              </span>
            </div>
          </div>
        </div>

      </section>

      <MarqueeBand />

      <section
        className="section statement-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="site-container statement-section__layout">
          <span
            className="ui-span eyebrow statement-section__eyebrow"
            data-reveal="clip"
          >
            {home.about.eyebrow}
          </span>
          <div className="statement-section__content">
            <h2
              className="ui-title statement-section__title"
              data-reveal="clip"
              id="about-title"
            >
              {home.about.title}
            </h2>
            <div className="statement-section__copy" data-reveal>
              {home.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section cases-section"
        id="cases"
        aria-labelledby="cases-title"
      >
        <div className="site-container cases-section__layout">
          <div className="cases-section__intro">
            <SectionHeading
              eyebrow={home.casesHeading.eyebrow}
              title={home.casesHeading.title}
              description={home.casesHeading.description}
              titleId="cases-title"
            />
          </div>

          <div className="cases-stack">
            {caseStudies.map((caseStudy, index) => (
              <CaseCard
                caseStudy={caseStudy}
                key={caseStudy.id}
                labels={{
                  results: home.projectResultsLabel,
                  role: home.roleLabel,
                  technologies: home.technologiesLabel,
                }}
                order={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="text-interlude" aria-hidden="true">
        <div className="site-container text-interlude__inner">
          <span className="ui-span text-interlude__line" data-scroll-shift="1">
            Product
          </span>
          <span className="ui-span text-interlude__line text-interlude__line--offset" data-scroll-shift="1">
            Engineering
          </span>
          <span className="ui-span text-interlude__line text-interlude__line--accent" data-scroll-shift="1">
            Delivery
          </span>
        </div>
      </div>

      <section
        className="section expertise-section"
        id="expertise"
        aria-labelledby="expertise-title"
      >
        <div className="site-container expertise-section__layout">
          <div className="expertise-section__intro">
            <SectionHeading
              eyebrow={home.expertiseHeading.eyebrow}
              title={home.expertiseHeading.title}
              description={home.expertiseHeading.description}
              titleId="expertise-title"
            />
          </div>

          <div className="expertise-list">
            {expertiseItems.map((item, index) => (
              <article
                className="expertise-card"
                data-reveal="right"
                key={item.index}
                style={{ "--motion-delay": `${Math.min(index, 3) * 70}ms` }}
              >
                <span className="ui-span expertise-card__index">
                  {item.index}
                </span>
                <div className="expertise-card__content">
                  <h3 className="ui-title expertise-card__title">
                    {item.title}
                  </h3>
                  <p className="expertise-card__description">
                    {item.description}
                  </p>
                </div>
                <span className="ui-span expertise-card__marker" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section services-section"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow={home.servicesHeading.eyebrow}
            title={home.servicesHeading.title}
            description={home.servicesHeading.description}
            titleId="services-title"
          />

          <div className="services-grid">
            {serviceItems.map((item, index) => (
              <article
                className="service-card"
                data-reveal="clip"
                key={item.index}
                style={{ "--motion-delay": `${Math.min(index, 3) * 90}ms` }}
              >
                <div className="service-card__topline">
                  <span className="ui-span service-card__index">
                    {item.index}
                  </span>
                  <span className="ui-span service-card__signal" aria-hidden="true" />
                </div>
                <h3 className="ui-title service-card__title">{item.title}</h3>
                <p className="service-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-section" aria-labelledby="ai-title">
        <div className="site-container ai-section__layout">
          <div data-reveal="scale">
            <SystemMap />
          </div>

          <div className="ai-section__content">
            <span className="ui-span eyebrow" data-reveal="clip">
              {home.ai.eyebrow}
            </span>
            <h2
              className="ui-title ai-section__title"
              data-reveal="clip"
              id="ai-title"
            >
              {home.ai.title}
            </h2>
            <p className="ai-section__description" data-reveal>
              {home.ai.description}
            </p>

            <ol className="ai-capabilities">
              {aiCapabilities.map((capability, index) => (
                <li
                  className="ai-capability"
                  data-reveal="right"
                  key={capability.id}
                  style={{ "--motion-delay": `${Math.min(index, 4) * 60}ms` }}
                >
                  <span className="ui-span ai-capability__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="ui-span ai-capability__text">
                    {capability.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="section stack-section"
        id="stack"
        aria-labelledby="stack-title"
      >
        <div className="site-container stack-section__heading">
          <SectionHeading
            align="center"
            eyebrow={home.stackHeading.eyebrow}
            title={home.stackHeading.title}
            description={home.stackHeading.description}
            titleId="stack-title"
          />
        </div>

        <div className="site-container stack-grid">
          {stackGroups.map((group) => (
            <StackGroup group={group} key={group.id} />
          ))}
        </div>
      </section>

      <section
        className="section process-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="process-section__glow" aria-hidden="true" />
        <div className="site-container">
          <SectionHeading
            eyebrow={home.processHeading.eyebrow}
            title={home.processHeading.title}
            description={home.processHeading.description}
            titleId="process-title"
          />

          <ol className="process-list" data-reveal="clip">
            {processSteps.map((step, index) => (
              <li
                className="process-step"
                data-reveal
                key={step.index}
                style={{ "--motion-delay": `${index * 90}ms` }}
              >
                <span className="ui-span process-step__index">
                  {step.index}
                </span>
                <div className="process-step__content">
                  <h3 className="ui-title process-step__title">
                    {step.title}
                  </h3>
                  <p className="process-step__description">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
