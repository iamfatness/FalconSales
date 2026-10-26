import type { ServicePage } from "../content/site.ts";
import { site } from "../content/site.ts";

export default function ServiceView({ service }: { service: ServicePage }) {
  const others = site.services.filter((item) => item.slug !== service.slug);

  return (
    <main>
      <section className="section service-intro">
        <div className="wrap">
          <p className="breadcrumb">
            <a href="/">Home</a>
            {" / "}
            {service.navLabel}
          </p>
          <h1>{service.headline}</h1>
          <p className="lede">{service.lede}</p>
          <p className="service-action">
            <a className="button" href="/request-a-layout">
              Send your floor plan
            </a>
          </p>
          <img className="service-photo" src={service.image} alt={service.imageAlt} />
        </div>
      </section>

      <section className="section section-rule">
        <div className="wrap">
          <h2>What we look at before we specify a system</h2>
          <div className="checks">
            {service.checks.map((check) => (
              <article key={check.title}>
                <h3>{check.title}</h3>
                <p>{check.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>A job, shown as a placeholder</h2>
          <article className="job-card service-job">
            <img src={service.job.image} alt={service.job.imageAlt} />
            <div className="job-copy">
              <p className="placeholder-label">{service.job.label}</p>
              <h3>{service.job.title}</h3>
              <p>{service.job.body}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-rule">
        <div className="wrap">
          <h2>Also on this floor</h2>
          <div className="service-links">
            {others.map((other) => (
              <a key={other.slug} className="service-card" href={`/${other.slug}`}>
                <h3>{other.navLabel}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section close">
        <div className="wrap">
          <h2>Have the equipment placed?</h2>
          <a className="button" href="/request-a-layout">
            Request a storage layout
          </a>
        </div>
      </section>
    </main>
  );
}
