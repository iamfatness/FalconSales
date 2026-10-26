import { site } from "../content/site.ts";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>{site.placeLine}</p>
        <p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </p>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <a href="/faq">FAQ</a>
        </p>
      </div>
    </footer>
  );
}
