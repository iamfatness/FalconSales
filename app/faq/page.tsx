import { site } from "../../content/site.ts";

export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="wrap copy-page">
          <h1>FAQ</h1>
          <div className="faq-list">
            {site.faq.map((item) => (
              <article key={item.question}>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
