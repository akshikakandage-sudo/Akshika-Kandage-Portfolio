# Akshika Kandage — portfolio website

Four pages: **Home** (with a contact section at the bottom), **My Journey** (map and organizations), **Projects**, **Writing**. Built with Astro, edited with Keystatic, hosted on Netlify.

> **Status.** This project has **not been installed, built or run** (it was written without internet access). The first `npm install` and `npm run build` on Netlify are the first real test. If a step fails, send me the error message.

## 1. Publish (about 15 minutes)
1. Create a free GitHub account, then a new **private** repository called `akshika-portfolio`. Choose **Add file → Upload files**, drag in everything from inside this folder (not `node_modules`), and commit.
2. In Netlify choose **Add new site → Import an existing project → GitHub**, select the repository, and click **Deploy**. Build settings come from `netlify.toml`. Your current site is not touched. Rename the new site under Site configuration.
3. For the editing screen: sign in at keystatic.cloud with GitHub, create a team, add a project linked to the repository, and note its name (`team-name/project-name`). In Netlify, add the environment variable `PUBLIC_KEYSTATIC_PROJECT` with that value and redeploy.

## 2. Editing (no code)
Open `your-site.netlify.app/keystatic` (or `/admin`), sign in, edit, press **Save**. Netlify rebuilds and the site updates in about a minute.
- **Projects → Create:** enter a title and either paste a shareable Google Drive or Docs link, or upload a PDF, presentation or document. Optional: document type, cover image. Use **Order** to reorder, and untick **Show on the website** to hide one.
- **Thumbnails:** for Google Drive and Docs links the site uses the document's real first page automatically (Google's public thumbnail). For an uploaded file, upload a cover image; without one a simple typographic tile with the project's title is shown.
- **Where I’ve worked:** organization name, job title, logo (optional), website (optional). With no logo, the name appears as text. An organization with no job title never appears (University of St Andrews is set up this way until you add your role).
- **Map places:** edit the short narrative and photograph for each of the four places, or add one with its latitude, longitude and country code.
- **Writing:** add a title, optional date and link; choose Published or Work in progress; tick **Show on the website**.
- **Home and Contact:** your introduction, portrait, greetings, email, LinkedIn, résumé and writing links.

## 3. Working on your own computer (optional)
Node 20+, then `npm install`, `npm run dev`, and open http://localhost:4321 and http://localhost:4321/keystatic.

## What is verified, and what is not
- **Not run:** install, build, deploy, the Keystatic screen, the map, thumbnails, mobile layout and accessibility checks.
- **Checked:** every content file and the configuration are well formed. All twelve Google links you listed were fetched without signing in and returned their titles, so they appear to be publicly viewable. This was an automated fetch, not a browser test.
- **Not possible for me:** opening your Canva design (Canva blocks automated access), listing the other files in your Drive folder, downloading official logos, and loading Google's thumbnails in a browser. Please test these on the live preview.
- **Held back until you approve:** the four client or organization reports (CPCNH, Kheyti, Working Capital Fund, Revamp Engineering) are switched off. Tick **Show on the website** on each when you are happy for them to be public.
- **Hidden until you supply them:** the St Andrews role, your CELI and BERC articles (no verified titles or links), your portrait, place photographs and résumé. The AI-Powered Global Policy Learning Platform is kept but hidden because it has no document to open.
