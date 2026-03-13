#!/usr/bin/env node

const targetUrl = process.argv[2] || "https://limosa.work/actual/";

async function main() {
  let response;
  try {
    response = await fetch(targetUrl, { cache: "no-store" });
  } catch (error) {
    console.error(`❌ Request failed: ${error.message}`);
    process.exit(1);
  }

  if (!response.ok) {
    console.error(`❌ HTTP ${response.status} when requesting ${targetUrl}`);
    process.exit(1);
  }

  const html = await response.text();

  const checks = [
    {
      name: "nav toggle button exists",
      pass: /class=["'][^"']*nav-toggle[^"']*["']/i.test(html)
    },
    {
      name: "site menu nav exists",
      pass: /<nav[^>]*id=["']site-menu["'][^>]*>/i.test(html)
    },
    {
      name: "menu starts with aria-expanded false",
      pass: /aria-expanded=["']false["']/i.test(html)
    },
    {
      name: "toggle script includes setOpen helper",
      pass: /const\s+setOpen\s*=\s*\(isOpen\)\s*=>/i.test(html)
    },
    {
      name: "toggle click handler present",
      pass: /toggle\.addEventListener\(\s*["']click["']/i.test(html)
    },
    {
      name: "outside click close handler present",
      pass: /document\.addEventListener\(\s*["']click["']/i.test(html)
    }
  ];

  console.log(`\nActual nav check for: ${targetUrl}`);
  let failed = 0;

  for (const check of checks) {
    if (check.pass) {
      console.log(`✅ ${check.name}`);
    } else {
      failed += 1;
      console.log(`❌ ${check.name}`);
    }
  }

  if (failed > 0) {
    console.error(`\n${failed} check(s) failed.`);
    process.exit(1);
  }

  console.log("\nAll checks passed.");
}

main();
