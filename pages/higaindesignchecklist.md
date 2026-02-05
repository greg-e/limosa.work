# higaindesign.com Transfer Checklist

**From:** Netfirms  
**To:** Porkbun (domain + email) + Cloudflare (DNS + hosting)

---

## Final Setup Overview

| Function | Provider | Cost |
|----------|----------|------|
| Domain registration | Porkbun | ~$10/yr |
| Email hosting | Porkbun | $24/yr |
| DNS | Cloudflare | Free |
| Website hosting | Cloudflare Pages | Free |
| Code repository | GitHub | Free |

**Total: ~$34/year**

---

## Phase 1: Backup Email (Do This First)

Email will stop working during the transition. Download everything now.

### Install Thunderbird
- [ ] Download from https://www.thunderbird.net
- [ ] Install and open

### Add Your Netfirms Email Account
- [ ] File → New → Existing Mail Account
- [ ] Enter your name, email address, and password
- [ ] If auto-detect fails, use manual settings:

| Setting | Incoming (IMAP) | Outgoing (SMTP) |
|---------|-----------------|-----------------|
| Server | mail.higaindesign.com | mail.higaindesign.com |
| Port | 993 | 465 |
| Security | SSL/TLS | SSL/TLS |
| Username | your full email address | your full email address |

### Download All Email
- [ ] Wait for all folders to fully sync (watch status bar at bottom)
- [ ] Verify Inbox, Sent, Drafts, etc. are all synced

### Export Backup
- [ ] Tools → Add-ons → Search "ImportExportTools NG" → Install
- [ ] Restart Thunderbird
- [ ] Right-click Inbox → ImportExportTools NG → Export all messages → MBOX format
- [ ] Repeat for Sent, Drafts, and any other folders
- [ ] Save exports somewhere safe

---

## Phase 2: Prepare at Netfirms

### Check Domain Eligibility
- [ ] Domain is at least 60 days old
- [ ] Domain has not been transferred in the last 60 days
- [ ] Domain is not expired

### Unlock the Domain
- [ ] Log into Netfirms (https://www.netfirms.com)
- [ ] Go to Domain Manager or My Domains
- [ ] Click on higaindesign.com
- [ ] Find Domain Lock / Transfer Lock / Registrar Lock
- [ ] Turn it **OFF**

### Get Authorization Code
- [ ] In the same domain settings area, find Authorization Code / EPP Code / Transfer Key
- [ ] Click to request it
- [ ] Netfirms will either display it or email it to you
- [ ] **Save this code** – you need it for Porkbun

### Verify Contact Email
- [ ] Check that the registrant email on file is accessible
- [ ] You'll receive confirmation emails there

**Authorization Code:** `_________________________________`

---

## Phase 3: Transfer Domain to Porkbun

### Start the Transfer
- [ ] Go to https://porkbun.com/transfer
- [ ] Enter: higaindesign.com
- [ ] Click Search / Transfer

### Complete the Transfer
- [ ] Paste your Authorization Code when prompted
- [ ] Pay (~$10, includes 1 year renewal)
- [ ] Check email for Porkbun confirmation

### Approve at Netfirms
- [ ] Check your registrant email inbox (and spam)
- [ ] Look for email from Netfirms asking to approve/deny transfer
- [ ] Click the link and **APPROVE**

*Note: If you don't approve manually, transfer auto-completes in 5-7 days*

### Wait for Completion
- [ ] Wait for completion email from Porkbun (typically 1-7 days)

**Transfer completed on:** `_____________`

---

## Phase 4: Set Up Porkbun Email

### Purchase Email Hosting
- [ ] Log into Porkbun
- [ ] Go to https://porkbun.com/products/email
- [ ] Or: Domain Management → click email icon next to higaindesign.com
- [ ] Select email hosting plan ($24/year)
- [ ] Complete purchase

### Create Your Mailbox
- [ ] In Porkbun dashboard, go to Email Hosting settings
- [ ] Create mailbox: info@higaindesign.com (or preferred address)
- [ ] Set a strong password
- [ ] Note the password somewhere safe

**Email address:** `_______________________@higaindesign.com`

**Password:** `_________________________________`

### Note Email Server Settings
You'll need these for your email app:

| Setting | Incoming (IMAP) | Outgoing (SMTP) |
|---------|-----------------|-----------------|
| Server | mail.porkbun.com | mail.porkbun.com |
| Port | 993 | 465 |
| Security | SSL/TLS | SSL/TLS |
| Username | your full email address | your full email address |

### Access Email
**Option A: Webmail**
- [ ] Go to https://webmail.porkbun.com
- [ ] Log in with your full email address and password

**Option B: Email App (Outlook, Thunderbird, phone)**
- [ ] Add account using IMAP settings above

### Import Old Email (Optional)
- [ ] In Thunderbird, add your new Porkbun email account
- [ ] Drag and drop emails from old account to new account
- [ ] Or: Right-click folder → ImportExportTools NG → Import mbox file

---

## Phase 5: Set Up Cloudflare Account

### Create Cloudflare Account
- [ ] Go to https://dash.cloudflare.com/sign-up
- [ ] Create free account

### Add Your Domain
- [ ] Click "Add a site"
- [ ] Enter: higaindesign.com
- [ ] Select **Free** plan
- [ ] Click Continue

### Note Your Cloudflare Nameservers
Cloudflare will assign you two nameservers. Write them down:

**Nameserver 1:** `___________________________________.ns.cloudflare.com`

**Nameserver 2:** `___________________________________.ns.cloudflare.com`

---

## Phase 6: Point Porkbun to Cloudflare Nameservers

### Change Nameservers at Porkbun
- [ ] Log into Porkbun
- [ ] Go to Domain Management
- [ ] Click on higaindesign.com (or the "DNS" link next to it)
- [ ] Find Nameservers section
- [ ] Click "Edit" or change to custom nameservers
- [ ] Delete existing nameservers
- [ ] Enter Cloudflare Nameserver 1
- [ ] Enter Cloudflare Nameserver 2
- [ ] Save

### Verify in Cloudflare
- [ ] Go back to Cloudflare dashboard
- [ ] Wait for Cloudflare to detect the nameserver change (can take a few minutes to 24 hours)
- [ ] Status will change from "Pending" to "Active"

**Cloudflare activated on:** `_____________`

---

## Phase 7: Configure DNS in Cloudflare

### Access DNS Settings
- [ ] In Cloudflare dashboard, click higaindesign.com
- [ ] Go to DNS → Records

### Add Email Records (MX)
Add these MX records for Porkbun email:

| Type | Name | Mail Server | Priority | Proxy |
|------|------|-------------|----------|-------|
| MX | @ | mail.porkbun.com | 10 | DNS only |

### Add Email Records (TXT for SPF)

| Type | Name | Content |
|------|------|---------|
| TXT | @ | v=spf1 include:_spf.porkbun.com ~all |

### Website Records
You'll add these after connecting GitHub to Cloudflare Pages (Phase 9).

---

## Phase 8: Create GitHub Repository

### Set Up Repository
- [ ] Go to https://github.com
- [ ] Create account if needed
- [ ] Click "+" → New repository
- [ ] Name: higaindesign-website
- [ ] Make it Public (required for free Cloudflare Pages)
- [ ] Check "Add a README file"
- [ ] Click "Create repository"

### Add Basic Jekyll Site Files
Create these files in your repository:

**_config.yml**
```yaml
title: HiGain Design Services
description: PCB layout and design services
baseurl: ""
url: "https://higaindesign.com"
markdown: kramdown
```

**index.md**
```markdown
---
layout: default
title: Home
---

# HiGain Design Services

PCB layout and design services with over 30 years of experience.

## Services

- Printed circuit board layout
- Symbol library generation and maintenance
- Engineering support and design
- Electronic equipment packaging

## Contact

Phone: (770) 921-3129

Email: info@higaindesign.com
```

**_layouts/default.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | {{ site.title }}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #333;
    }
    h1, h2 { color: #1a1a1a; }
    a { color: #0066cc; }
  </style>
</head>
<body>
  {{ content }}
</body>
</html>
```

- [ ] Files created in GitHub repository

---

## Phase 9: Set Up Cloudflare Pages

### Connect to GitHub
- [ ] In Cloudflare dashboard, go to Workers & Pages
- [ ] Click "Create application"
- [ ] Select "Pages"
- [ ] Click "Connect to Git"
- [ ] Authorize Cloudflare to access your GitHub
- [ ] Select your higaindesign-website repository

### Configure Build Settings
- [ ] Framework preset: Jekyll
- [ ] Build command: `jekyll build`
- [ ] Build output directory: `_site`
- [ ] Click "Save and Deploy"

### Wait for Initial Build
- [ ] Cloudflare builds and deploys your site
- [ ] Note your pages.dev URL: `higaindesign-website.pages.dev` (or similar)

**Pages.dev URL:** `_________________________________`

### Add Custom Domain
- [ ] In your Pages project, go to Custom domains
- [ ] Click "Set up a custom domain"
- [ ] Enter: higaindesign.com
- [ ] Click Continue
- [ ] Cloudflare automatically adds DNS records
- [ ] Repeat for: www.higaindesign.com

### Verify Site is Live
- [ ] Visit https://higaindesign.com
- [ ] Visit https://www.higaindesign.com
- [ ] Both should show your site with HTTPS

---

## Phase 10: Final Verification Checklist

### Domain
- [ ] higaindesign.com is registered at Porkbun
- [ ] Nameservers point to Cloudflare

### DNS
- [ ] Cloudflare shows domain as "Active"
- [ ] MX records point to mail.porkbun.com
- [ ] CNAME records point to Cloudflare Pages

### Website
- [ ] https://higaindesign.com loads your site
- [ ] https://www.higaindesign.com loads your site
- [ ] HTTPS is working (padlock icon)

### Email - Receiving
- [ ] Send test email to info@higaindesign.com
- [ ] Check webmail at https://webmail.porkbun.com
- [ ] Email arrives in inbox

### Email - Sending
- [ ] Log into webmail
- [ ] Compose and send test email to a friend
- [ ] Confirm they receive it from @higaindesign.com

### Email - App Access (Optional)
- [ ] Add account to phone email app using IMAP settings
- [ ] Verify send and receive works

---

## Ongoing Maintenance

### Updating the Website
1. Edit markdown files in GitHub (or clone locally, edit, push)
2. Cloudflare automatically rebuilds and deploys
3. Changes go live in ~1-2 minutes

### Checking Email
- Webmail: https://webmail.porkbun.com
- Or use any email app with IMAP

### Renewals
- Domain (~$10/yr) – renews at Porkbun
- Email ($24/yr) – renews at Porkbun
- Cloudflare – Free, no renewal needed

---

## Troubleshooting

### DNS Not Propagating
- Check at https://www.whatsmydns.net
- Can take up to 48 hours (usually much faster)
- Clear browser cache / try incognito

### Email Not Working
- Verify MX records in Cloudflare DNS point to mail.porkbun.com
- Check SPF TXT record exists
- Verify mailbox is created in Porkbun

### Site Not Loading
- Check Cloudflare Pages deployment status
- Verify custom domain is added in Pages settings
- Check for build errors in Cloudflare dashboard
- Make sure _config.yml has no syntax errors

### Build Failing
- Check Cloudflare Pages build logs
- Common issues: missing _config.yml, bad YAML syntax, missing layout files

---

## Quick Reference

### Porkbun Login
- URL: https://porkbun.com
- For: Domain management, email hosting

### Cloudflare Login
- URL: https://dash.cloudflare.com
- For: DNS, website hosting

### GitHub Login
- URL: https://github.com
- For: Website content (markdown files)

### Webmail
- URL: https://webmail.porkbun.com
- For: Checking email in browser

### Email Settings (for apps)
| | Value |
|--|-------|
| IMAP Server | mail.porkbun.com |
| IMAP Port | 993 |
| SMTP Server | mail.porkbun.com |
| SMTP Port | 465 |
| Security | SSL/TLS |
| Username | full email address |

---

## Timeline Estimate

| Phase | Duration |
|-------|----------|
| Backup email | 30 min - 2 hours |
| Prepare Netfirms | 10 minutes |
| Porkbun transfer initiation | 10 minutes |
| Transfer completion | 1-7 days |
| Porkbun email setup | 15 minutes |
| Cloudflare setup | 15 minutes |
| DNS propagation | 15 min - 48 hours |
| GitHub + Cloudflare Pages | 30 minutes |

**Total active work:** ~2 hours  
**Total elapsed time:** 2-8 days (mostly waiting for transfer)
