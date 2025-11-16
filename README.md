# Astro Data-driven Resume

## Overview
This is an Astro.js project that uses yaml data files to populate
section compontents on a single index page that displays my resume.
The final result will be hosted using an AWS S3 bucket to serve a
static page to my sub-domain at [https://resume.johng.info].

## Project Goals
- Use Astro.js in order to maximize performance and keep the site 
static and lightweight
- Utilize the yaml data files in order to abstract away the actual
details of my resume, making it easy to update the details later.
- Learn to take full advantage of Gemini CLI to help me finish.

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── data/
│   │   └── experience.yml
│   │   └── links.yml
│   │   └── personal.yml
│   │   └── skills.yml
│   │   └── summary.yml
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │   └── index.astro
│   ├── styles
│   │   └── shared.css
└── package.json
```



There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
