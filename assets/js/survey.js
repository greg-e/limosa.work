// Time-tracking survey. Collects answers as JSON and POSTs them to the form's
// data-endpoint. If that request fails, or no endpoint is set, it opens an email
// with the answers filled in.
(function () {
  var form = document.getElementById("time-survey");
  if (!form) return;

  var statusEl = form.querySelector(".survey-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var thanks = document.querySelector(".survey-thanks");
  var intro = document.querySelector(".survey-intro");

  // Typing in an "Other" text box selects its option.
  form.querySelectorAll(".survey-other").forEach(function (label) {
    var choice = label.querySelector('input[type="radio"], input[type="checkbox"]');
    var text = label.querySelector('input[type="text"]');
    if (!choice || !text) return;
    text.addEventListener("input", function () {
      if (text.value.trim() && !choice.checked) {
        choice.checked = true;
        choice.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  });

  // Enforce "pick up to N" groups.
  form.querySelectorAll("[data-max]").forEach(function (group) {
    var max = parseInt(group.getAttribute("data-max"), 10);
    var boxes = group.querySelectorAll('input[type="checkbox"]');
    group.addEventListener("change", function () {
      var checked = group.querySelectorAll('input[type="checkbox"]:checked').length;
      boxes.forEach(function (b) { b.disabled = !b.checked && checked >= max; });
    });
  });

  function collect() {
    var data = {};
    var fd = new FormData(form);
    fd.forEach(function (value, key) {
      value = typeof value === "string" ? value.trim() : value;
      if (value === "") return;
      if (key in data) {
        data[key] = [].concat(data[key], value);
      } else {
        data[key] = value;
      }
    });
    // Checkbox groups are always arrays so the data stays consistent.
    ["trade", "method", "pain"].forEach(function (k) {
      if (k in data) data[k] = [].concat(data[k]);
    });
    var params = new URLSearchParams(location.search);
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
      if (params.get(k)) data[k] = params.get(k);
    });
    data.submitted_at = new Date().toISOString();
    data.referrer = document.referrer || "";
    data.page = location.pathname;
    return data;
  }

  function hasAnswers(data) {
    var meta = ["submitted_at", "referrer", "page", "utm_source", "utm_medium", "utm_campaign", "website"];
    return Object.keys(data).some(function (k) { return meta.indexOf(k) === -1; });
  }

  function setStatus(msg, isError) {
    statusEl.textContent = msg;
    statusEl.classList.toggle("is-error", Boolean(isError));
  }

  function showThanks() {
    form.hidden = true;
    if (intro) intro.hidden = true;
    if (thanks) {
      thanks.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function toEmailBody(data) {
    return Object.keys(data).map(function (k) {
      var v = Array.isArray(data[k]) ? data[k].join("; ") : data[k];
      return k + ": " + v;
    }).join("\n");
  }

  function openMailto(data) {
    var to = form.getAttribute("data-fallback-email") || "";
    location.href = "mailto:" + to +
      "?subject=" + encodeURIComponent("How we track time") +
      "&body=" + encodeURIComponent(toEmailBody(data));
  }

  // The email draft keeps the extra context the page already recorded.
  // The POST sends only the form fields.
  function payloadForPost(data) {
    var skip = ["submitted_at", "referrer", "page", "utm_source", "utm_medium", "utm_campaign"];
    var out = {};
    Object.keys(data).forEach(function (k) {
      if (skip.indexOf(k) === -1) out[k] = data[k];
    });
    return out;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = collect();

    if (data.website) { showThanks(); return; } // bot
    if (!hasAnswers(data)) {
      setStatus("Answer at least one question before sending.", true);
      return;
    }
    var emailInput = form.querySelector('input[name="email"]');
    if (emailInput && emailInput.value && !emailInput.checkValidity()) {
      setStatus("That email address doesn't look right.", true);
      emailInput.focus();
      return;
    }

    var endpoint = (form.getAttribute("data-endpoint") || "").trim();
    if (!endpoint) {
      openMailto(data);
      showThanks();
      return;
    }

    submitBtn.disabled = true;
    setStatus("Sending…");
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, 8000) : null;
    var opts = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payloadForPost(data)),
      referrerPolicy: "no-referrer",
      credentials: "omit"
    };
    if (controller) opts.signal = controller.signal;
    fetch(endpoint, opts)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        showThanks();
      })
      .catch(function () {
        submitBtn.disabled = false;
        openMailto(data);
        setStatus("We couldn't save your answers here. Your email app should open with them filled in. Please send that message. If it doesn't, email " +
          (form.getAttribute("data-fallback-email") || "") + ".", true);
      })
      .then(function () {
        if (timer) clearTimeout(timer);
      });
  });
})();
