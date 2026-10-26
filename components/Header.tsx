"use client";

import { useState } from "react";
import { site } from "../content/site.ts";
import Logo from "./Logo.tsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Logo />
        <div className="header-tools">
          <a className="header-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a className="button" href="/request-a-layout">
            Request a storage layout
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
