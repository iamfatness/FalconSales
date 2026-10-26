import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { site } from "../content/site.ts";

const imageFiles = [
  "empty-warehouse.jpg",
  "cartons.jpg",
  "shelving.jpg",
  "rack-close.jpg",
  "rack-aisle.jpg",
];

test("home headline, lede, eyebrow, and section order", () => {
  assert.equal(
    site.home.headline,
    "The building is designed. Your equipment is placed. Storage is next.",
  );
  assert.equal(
    site.home.lede,
    "Falcon designs and installs the pallet racking, shelving, wire partitions, and layout that make a new warehouse work.",
  );
  assert.equal(site.home.eyebrow, "Lake Orion · Oakland County · Since 1991");
  assert.deepEqual(site.home.sectionOrder, [
    "hero",
    "trust",
    "services",
    "steps",
    "work",
    "quote",
    "nearby",
    "close",
  ]);
});

test("published phone, email, and place line", () => {
  assert.equal(site.phoneDisplay, "(248) 340-8834");
  assert.equal(site.email, "matt.falconsales@hotmail.com");
  assert.equal(site.placeLine, "Falcon Sales Company · Lake Orion, Michigan 48360");
});

test("service slugs stay in nav order", () => {
  assert.deepEqual(
    site.services.map((service) => service.slug),
    ["pallet-racking", "shelving", "wire-partitions", "warehouse-layout"],
  );
});

test("jobs and the quote are marked placeholders", () => {
  for (const job of site.home.jobs) {
    assert.equal(job.placeholder, true);
    assert.equal(job.label, "Placeholder");
  }
  for (const service of site.services) {
    assert.equal(service.job.placeholder, true);
    assert.equal(service.job.label, "Placeholder");
  }
  assert.equal(site.home.quote.label, "Placeholder");
  assert.match(site.home.quote.attribution, /not a real customer/);
});

test("nearby chips are unlabeled stand-ins", () => {
  assert.equal(site.home.nearby.length, 4);
  for (const chip of site.home.nearby) {
    assert.equal(chip, "Nearby business · placeholder");
  }
});

test("site copy has no capacity rating and no street address", () => {
  const serialized = JSON.stringify(site);
  assert.doesNotMatch(serialized, /\d+\s*(lb|lbs|pounds|kg)\b/i);
  assert.doesNotMatch(serialized, /\b(Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Boulevard|Blvd)\b/);
});

test("wire partitions use the empty warehouse and do not call it a cage photo", () => {
  const wire = site.services.find((service) => service.slug === "wire-partitions");
  assert.ok(wire);
  assert.equal(wire.image, "/images/empty-warehouse.jpg");
  assert.doesNotMatch(wire.imageAlt, /falcon cage|installed cage|our cage/i);
});

test("the five photographs exist under public/images", () => {
  for (const name of imageFiles) {
    assert.equal(existsSync(join("public", "images", name)), true, name);
  }
});

test("faq has five answers and capacity is set per job", () => {
  assert.equal(site.faq.length, 5);
  const capacity = site.faq.find((item) => /capacity/i.test(item.question));
  assert.ok(capacity);
  assert.match(capacity.answer, /set for the job/i);
});
