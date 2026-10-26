import { site } from "../../content/site.ts";

export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="wrap copy-page">
          <h1>About</h1>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
