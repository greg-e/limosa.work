---
name: zinsser
description: Draft, revise, or audit writing in the limosa.work repo using William Zinsser's principles from On Writing Well (simplicity, cutting clutter, strong verbs, unity, leads and endings, rewriting) plus AI-slop removal, adapted for Actual's public site copy and the author's plain, factual voice. Covers the site pages (index.html, pages/), the deck cards (assets/actual-deck/cards.json), the brand docs (docs/brand-identity/), zettels, READMEs, commit messages, and PR descriptions. Use when writing or rewriting a page, a card, or a doc, tightening copy, or when the author asks for a "Zinsser pass," a clutter check, to "deslop," "clean up the writing," "remove AI slop," or whether a passage reads clean.
---

# Zinsser pass for limosa.work

William Zinsser wrote *On Writing Well* for nonfiction, and this repo is nonfiction. Say the true thing in the fewest plain words, and trust the reader. This skill turns his principles into working passes for Actual's public writing.

It sits **under** the brand docs in `docs/brand-identity/` (`messaging.md`, `brand-guide.md`, `usage-checklist.md`). What Actual is, what it claims, and what it must not say are set there. If this skill seems to pull another way, the brand docs win. If a brand doc and a live page disagree on a fact (what the badge records, who Actual is looking for), flag it to the author and don't settle it yourself.

This is the repo's only line-editing skill.

## Who reads this

The site's readers are field crews and the people who run them: owners, crew leads, office and payroll staff in landscaping, HVAC, plumbing, pest control, cleaning, in-home care, delivery, and the trades. Partners and possible collaborators come second. Write for someone who reads on a phone, between jobs, and has heard a lot of software pitches.

- Use the words they use: *crew, job, timecard, hours, payroll, foreman, the yard, the truck.* Skip software words: *platform, solution, workflow, stakeholders, insights, data-driven.*
- Name the trade, the job, the hour. "Check their hours before payroll" beats "gain visibility into time data."

## Voice

**Be yourself, and here "yourself" is the author.** The voice is the product. Look at the homepage hero, the About page, and the survey intro for the target. The author's voice is:

- **Plain words.** The common word over the impressive one.
- **Direct.** The fact first, in a sentence with a subject and a verb. "Actual is a badge each worker wears."
- **Conversational.** Contractions ("We're talking with field crews"), *we* for Actual, *you* for the reader when it helps.
- **Concrete lists of real things.** "Location, task and time." "Landscaping, HVAC, plumbing, pest control." A list of named things beats an abstraction.
- **Calm.** No hype, no urgency, no exclamation points. Confident because it's specific.

A Zinsser pass makes that voice clearer. It never swaps it for a marketing register. When in doubt, cut a word rather than add a phrase.

## Four standing rules

These hold in every mode and every pass.

1. **No "X, not Y."** Write the positive statement. "Actual is in development." Cut "Actual is a concept, not a product you can buy," "build it with us, not just for us," "it's not truth, it's theater." Keep a contrast only when it carries real technical information ("raw data stays on the badge, not in the cloud"). The author reads contrast framing as AI slop.
2. **No slogans or kickers.** No bolded aphorisms, no mic-drop closers, no "Nothing more." fragments, no line built to be quoted ("If the work matters, the record of the work should be true. Everything else follows from that."). If a line draws attention to its own writing, rewrite it as a plain fact or cut it.
3. **Claim only what's true today.** Follow the brand docs on stage and claims. Don't invent customers, prices, dates, pilots, partners, or results. Describe hardware and features as planned unless they exist. Don't name the founder. A sentence that would be false if a reader called to check it gets rewritten.
4. **Public repo, public words.** Everything here is public, and most of it publishes to the site. Don't draft specs, test results, patent material, or strategy into this repo. If a draft starts to need them, stop and tell the author. That material lives in the private repo.

## Modes

Pick the mode from the request. **Session is the default.** Use Revise or Audit only when the author asks for them by name ("just fix it," "audit only," "no edits").

- **Session** (default): work through the page or doc with the author, fixing as you go.
  1. Run the three reads privately and rank the findings, most important first: claims and brand-doc conflicts, then structure, then lines.
  2. Bring up **one finding at a time** with the AskUserQuestion tool. Each question quotes the line with its `file:line`, names the problem in one sentence, and offers two or three fixes, the recommended one first and marked "(Recommended)", plus "Leave it." The question has to make sense by itself, because the author may see only the question dialog.
  3. **Apply the author's pick right away** with Edit, then bring up the next finding. If they choose "Other" and write their own wording, use it as written.
  4. **Ask a content question only when the answer changes the fix**: whether a feature exists yet, who a page is for, whether a claim is settled. Ask it as multiple choice with the likely answers as options. Don't ask what the page or the brand docs already answer.
  5. **Stop after the ten findings that matter most.** Give one line of what's left by category ("Also: 6 qualifiers, 2 *there is*") and ask whether to keep going. The author can stop at any point.
  6. **Wrap up** in two or three lines: what changed and what the author chose to leave. Then ask whether to commit. If the author's choices showed a voice preference this skill doesn't state yet, offer to add it here.
  Batch nothing and fix nothing silently, typos included. A typo can share a question with the finding next to it.
- **Draft**: writing a new page, section, card, or doc. Before writing, settle privately who reads it, what they should know or do after reading, and which facts from the brand docs it rests on. If a choice that shapes the piece isn't settled by the brand docs or the request, ask the author first, one multiple-choice question at a time with a recommendation. Apply the principles as you write, run the three reads once over the result, then hand over the finished copy without notes on your process.
- **Revise** (only when asked by name, e.g. "just fix it"): edit the file in place without asking, keep changes small and local, keep the order and structure unless asked. After editing, list the kinds of change you made in two or three lines. The diff shows the rest.
- **Audit** (only when asked by name, or for a check with no edits): don't touch the file. Report the ten findings that matter most, each as `file:line`, the quoted phrase, the principle, and a suggested fix, most important first. Then one line of totals for everything else by category. Give the full list only if asked.

For the author's own writing, default to the lightest touch that fixes the problem. Rewriting a paragraph the author wrote needs a reason you can name. Zettels are the author's working notes and get the lightest touch of all: fix clutter and slop, leave the thinking alone.

## Editing the files safely

- **HTML pages**: change text between tags only. Don't touch markup, classes, ids, or scripts unless asked. The Jekyll front matter `title` and `description`, and the `description` in `_config.yml`, are copy too; they show in search results and link previews.
- **Deck cards** (`assets/actual-deck/cards.json`): each card has `quote`, `title`, `tagline`, `why`, `how`, and `reflection`. The homepage shows `family`, `quote`, `title`, and `tagline`; the deck at `/actual/` shows the rest. Keep every field, keep the JSON valid, and escape quotes. A `quote` attributed to a real person stays word for word. The `tagline` and `reflection` fields invite kickers ("Truth is measured, not estimated."), so check them against standing rules 1 and 2 first. Rewrite them as plain facts and don't empty them.
- **Static fallbacks**: the homepage has static cards that the script replaces. If you edit a card's text, check whether the same text appears as a static fallback in `index.html` and keep the two in step.

## The three reads

Do them in this order, as three separate reads. The page read comes first, because a sentence-level fix is wasted on a section that's going to change.

### Read 1: the page

Read the whole page or doc once for structure, not sentences.

**Clarity.** Zinsser: clear thinking becomes clear writing. For each section, answer: who is this for, what does it say, and what should the reader do next. If you can't answer, the problem is the thinking, not the sentence. Fix the section or flag it, then go on. Common failures:
- A term the reader hasn't met yet ("the record," "the dock") used before the page says what it is.
- A pronoun or *it* with two possible owners (the badge or the record?).
- Two sections that say the same thing in different words.

**Unity.** One audience, one person, one tense, one attitude per page.
- **One audience.** A section that turns from crews to investors halfway is a unity break.
- **One person.** *We* for Actual and *you* or *workers* for the reader, held for the page. Don't slide between "workers" and "you" in one paragraph.
- **One tense.** Present for what Actual is and does. Future or "will" only for what's planned, and say it's planned.
- **One attitude.** Calm and factual. Don't swing into pitch-deck voice for the call to action.

**Leads and endings.**
- **The lead** does the most work in the fewest words: what Actual is, or what this page gives the reader, in the first sentence. Don't open with a rhetorical question, a sweeping claim about an industry, or a quote that needs explaining.
- **The ending**: stop when you're done. End on the last fact or the call to action ("Tell us how you track time"). No reflective closing line, no restated mission, no sentence that tells the reader what the page meant. If the last paragraph explains the one before it, cut it.

**Technical material** (Zinsser's chapter on science writing): lead the reader one step at a time from what they know (a timecard, a paycheck) to what they don't (a badge that records on its own). One new idea per sentence. Never stack two unexplained terms. Exact words, short active sentences.

**People.** Where a page quotes crews, owners, or survey answers, keep their words. Don't polish a real person's quote.

### Read 2: the lines

Now go sentence by sentence.

**Clutter.** "Clutter is the disease of American writing." Strip every word that does no work:
- **Little qualifiers**: *a bit, a little, sort of, kind of, rather, quite, very, pretty, somewhat, really, just, actually, simply, truly, seemed to, began to, managed to.* Keep one only when it's a real measurement ("about three minutes").
- **Doubled words**: two adjectives or two verbs saying the same thing ("accurate and precise," "track and record"). Keep the more exact one.
- **Inflated phrases**: *in order to, the fact that, due to the fact, for the purpose of, at this point in time, is able to, in terms of, when it comes to, a wide range of.* Use the plain word.
- **Marketing lexicon**: *seamless, effortless, frictionless, empower, unlock, leverage, streamline, revolutionize, transform, game-changer, cutting-edge, next-generation, innovative, solution, platform, ecosystem, holistic, insights, visibility, robust, world-class, best-in-class.* Replace with the concrete thing the badge does.
- **AI lexicon**: *tapestry, delve, testament, synergy, palpable, nuanced, symphony, elevate, navigate the complexities, in today's fast-paced world,* and their cousins. Also cut the "from X to Y" sweep ("from the yard to the office, everyone...").
- **Formulaic shape**: setup, three neat points, a balanced conclusion, a polite closing line. Three-item lists on schedule, three cards that all end with a slogan. Break the pattern; use as many items as there are.
- **Pre-stated payoffs**: a line that announces what the next lines show ("Here's why that matters:"). Cut it.
- **Told-after-shown**: a line that restates the benefit the previous sentence already made plain. "Each worker can check their hours before payroll" needs no "giving workers peace of mind."

**Verbs and modifiers.** Zinsser: verbs are the most important tool. Use active verbs, and use the exact one.
- Prefer the active voice, with the badge, the worker, or the business as the subject. "The badge records the day" beats "the day is recorded."
- Replace *there is / there are* and *is + -ing* when a direct verb is available.
- **Adverbs**: most are clutter. *Automatically, easily, instantly, accurately* usually restate the verb. Keep one only when it's the point (the badge records *without* anyone tapping it, so "automatically" can stay once on a page).
- **Adjectives**: only when they add a fact. "Verified" says something about the record; "powerful" doesn't.
- **Concept nouns**: "provides transparency into labor costs" → what the owner sees, and on what screen. Name the thing.
- **Stock phrases**: *peace of mind, at the end of the day, game-changing, the future of work, take it to the next level.* Replace with the specific fact, or cut.
- **Em-dash flourishes**: a dash setting up a twist or a punchline ("it's not truth—it's theater," "no memory required—just replay the data"). Use a comma or a period and state the fact. Dashes are fine for a real aside.

**Usage and mechanics.**
- Fix typos and agreement. Ask about them in Session mode, fix them silently in Revise mode, list them in Audit mode.
- **Contractions**, as the author uses them.
- **Punctuation**: commas carry the author's lists and rhythm. Semicolons sparingly. No exclamation points.
- **Numbers**: real numbers with units ("about three minutes," "ten short questions"). Ranges with an en dash in survey options ("6–20").
- **Headings**: sentence case, a plain statement or question. No pun headings, no colon-subtitle headings ("Truth: Why It Matters").
- **Mood changers**: *But*, *Then*, *Instead* to start a sentence when the turn needs it. Zinsser prefers *But* to *However*.
- **That / which**: *that* for restrictive clauses, *which* (with a comma) for the rest.

### Read 3: aloud

Zinsser: rewriting is the essence of writing. Read the copy at speaking pace, the way a crew lead would read it on a phone. Mark every place you stumble, lose the subject, or run out of breath, and fix only those. Then stop. Copy tightened three times starts losing the author's voice. The goal is the author's sentences, cleaner.

## Quick audit search

For a first sweep in Session or Audit mode, grep the target with the Grep tool, then read each hit in context. A hit is a question, not a verdict. For site-wide sweeps, limit the search to copy: `index.html`, `pages/`, `assets/actual-deck/cards.json`, `docs/`, `zettels/`, and the READMEs. Skip `_site/`, `worker/src/`, and scripts.

```
\b(very|quite|rather|really|just|simply|truly|actually|a bit|a little|sort of|kind of|somewhat|pretty|seemed to|began to|managed to|in order to|the fact that|in terms of|when it comes to|seamless(ly)?|effortless(ly)?|frictionless|empower\w*|unlock\w*|leverag\w+|streamlin\w+|revolutioni\w+|transformative|game.changer|cutting.edge|next.generation|innovative|solutions?|platform|ecosystem|holistic|insights?|visibility|robust|world.class|best.in.class|tapestry|delve|testament|synergy|palpable|nuanced|elevate|peace of mind)\b
```

Also search for:
- `, not |not just|not only|isn't \w+[,;—-]+ it's|—it's|— it's` for "X, not Y" contrasts (standing rule 1).
- `—` in copy, for dash flourishes. Most dashes in real asides are fine.
- `\b(there is|there are|there's)\b` for weak constructions.
- `!` outside of quotes and code.
- `\b(customers?|pilots?|partners|clients|\$\d)` to check each claim against the brand docs (standing rule 3).
- In `cards.json`, read every `tagline` and `reflection` for kickers. The grep won't find them; they read as slogans.
- Runs of two or more short verbless fragments ("No tapping. No apps. Nothing more."). Watch for them on the line read.

## Docs, READMEs, commits, and PRs

The same clutter, verb, and lexicon rules from Read 2 apply, and so do the standing rules. Skip Voice and Read 1. Then:

- **State it directly.** The fact, constraint, or decision first. Reasons after, if needed.
- **No conversational filler**: *Here is, As you can see, Note that, It's worth mentioning, Let me know if.*
- **Don't summarize twice.** No intro that says what a section will cover followed by a recap of what it covered.
- **Concrete over abstract**: name the file, the page, the number, or the date. "Edit `_config.yml`" beats "update the relevant configuration."
- **Tables and lists only where the content is truly parallel.** Otherwise plain sentences.
- **Current state.** Docs describe how things are now. Change history belongs in git.
- **Commit messages and PR titles**: imperative, specific, one line ("Store survey responses with a Cloudflare Worker"). The body says what changed and why, in a few plain sentences.
- **Zettels**: keep the template's front matter and headings (`templates/zettel_template.md`). Quotes from sources stay word for word.

## What this skill doesn't do

- It doesn't change what Actual is, claims, or plans. If tightening reveals a wrong or unsettled claim, flag it to the author.
- It doesn't add detail for color. A new fact has to be true and settled, or the author has to confirm it first.
- It doesn't touch logos, colors, layout, or code. The brand guide and the usage checklist cover those.
- It doesn't impose a word count. Zinsser cuts to make room for what matters. A page can get longer when a fact the reader needs was missing.
