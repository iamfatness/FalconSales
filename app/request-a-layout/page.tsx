import RequestForm from "../../components/RequestForm.tsx";
import { site } from "../../content/site.ts";

export default function Page() {
  return (
    <main>
      <section className="section">
        <div className="wrap copy-page">
          <h1>Request a storage layout</h1>
          <p className="lede">
            Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or send the details below.
          </p>
          <RequestForm />
          <p>Floor plans can be attached in the email that opens, sent to {site.email}.</p>
        </div>
      </section>
    </main>
  );
}
