import assert from "node:assert/strict";
import { test } from "node:test";
import { requestConfirmation, requestMailto, validateRequest } from "../content/request.ts";

const blank = {
  name: "",
  company: "",
  phone: "",
  email: "",
  need: "",
  message: "",
};

test("blank fields return the three errors and no mailto", () => {
  assert.deepEqual(validateRequest(blank), {
    name: "Name is required.",
    email: "Email is required.",
    need: "Tell us what you need.",
  });
  assert.equal(requestMailto(blank), null);
});

test("a complete request builds a mailto to the published address", () => {
  const href = requestMailto({
    name: "Ada",
    company: "Mill",
    phone: "2485550100",
    email: "ada@mill.test",
    need: "New building racking",
    message: "Plan attached next",
  });
  assert.ok(href);
  assert.equal(href.startsWith("mailto:matt.falconsales@hotmail.com"), true);
  const decoded = decodeURIComponent(href);
  assert.match(decoded, /New building racking/);
  assert.match(decoded, /ada@mill\.test/);
  assert.match(decoded, /Plan attached next/);
  assert.match(decoded, /Storage layout request/);
  assert.match(decoded, /\bAda\b/);
  assert.match(decoded, /\bMill\b/);
  assert.match(decoded, /2485550100/);
});

test("requestConfirmation is the mail-program sentence", () => {
  assert.equal(
    requestConfirmation,
    "Your email program should open with this request addressed to matt.falconsales@hotmail.com. If it does not, send the same details to that address.",
  );
});
