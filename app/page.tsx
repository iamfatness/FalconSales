import { Fragment, type ReactNode } from "react";
import { site } from "../content/site.ts";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-photo"
        src="/images/empty-warehouse.jpg"
        alt="Empty warehouse interior."
      />
      <div className="wrap hero-copy">
        <p className="eyebrow">{site.home.eyebrow}</p>
        <h1>{site.home.headline}</h1>
        <p className="lede">{site.home.lede}</p>
        <div className="hero-actions">
          <a className="button" href="/request-a-layout">
            Request a storage layout
          </a>
          <a className="button-ghost" href="#how-a-job-starts">
            See how a job starts
          </a>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust" aria-label="Trust">
      <ul className="wrap trust-list">
        {site.home.trust.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>What we design and install.</h2>
        <div className="card-grid">
          {site.home.services.map((service) => (
            <a key={service.href} className="service-card" href={service.href}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section section-rule" id="how-a-job-starts">
      <div className="wrap">
        <h2>How a new building reaches us</h2>
        <p className="intro">
          Most calls come early, after the architectural stage. The customer has laid out the equipment.
          Falcon designs the storage around it.
        </p>
        <ol className="steps">
          {site.home.steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Installed work</h2>
        <p className="intro">
          These cards are the shape of the proof. Real photos, industries, and outcomes replace them after
          the meeting with the head of sales and the CEO.
        </p>
        <div className="work-grid">
          {site.home.jobs.map((job) => (
            <article key={job.title} className="job-card">
              <img src={job.image} alt={job.imageAlt} />
              <div className="job-copy">
                <p className="placeholder-label">{job.label}</p>
                <h3>{job.title}</h3>
                <p>{job.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote-band">
      <blockquote className="wrap">
        <p>{site.home.quote.text}</p>
        <footer>
          {site.home.quote.label} · {site.home.quote.attribution}
        </footer>
      </blockquote>
    </section>
  );
}

function Nearby() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Already at work nearby</h2>
        <p className="intro">Names of businesses Falcon has served around Oakland County go here.</p>
        <ul className="chips">
          {site.home.nearby.map((chip, index) => (
            <li key={index}>{chip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section className="section close">
      <div className="wrap">
        <h2>Have the equipment on a plan?</h2>
        <p className="intro">Send the layout. Falcon will tell you what storage the building needs.</p>
        <a className="button" href="/request-a-layout">
          Request a storage layout
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  const sections = {
    hero: <Hero />,
    trust: <Trust />,
    services: <Services />,
    steps: <Steps />,
    work: <Work />,
    quote: <Quote />,
    nearby: <Nearby />,
    close: <Close />,
  } satisfies Record<(typeof site.home.sectionOrder)[number], ReactNode>;

  return (
    <main>
      {site.home.sectionOrder.map((name) => (
        <Fragment key={name}>{sections[name]}</Fragment>
      ))}
    </main>
  );
}
