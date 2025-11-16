# Project Context: Astro Data-driven Resume

## 1. Project Overview
This is an Astro.js project that uses yaml data files to populate
section compontents on a single index page that displays my resume.
The final result will be hosted using an AWS S3 bucket to serve a
static page to my sub-domain at [https://resume.johng.info].

## 1a. Project Goals & Purpose
- Use Astro.js in order to maximize performance and keep the site 
static and lightweight
- Utilize the yaml data files in order to abstract away the actual
details of my resume, making it easy to update the details later.
- Learn to take full advantage of Gemini CLI to help me finish.

## 2. Core Technologies & Stack
**Languages**: Typescript 5, TailwindCSS
**Frameworks & Runtimes**: Astro.js 3.2
**Key Libraries**: js-yaml
**Package Manager**: Bun 1.3.2

## 3. Architecture Documentation
This is a simple web application that once compiled using Astro, will be
hosted from an S3 bucket. CI/CS will be handled by a Github action.
**Directory Structure Philosophy**:
- `/src`: primary source code files
- `/public`: binary or static assets like images, svgs, icons, fonts, etc.
- `/`: project configuration files like package.json, astro.config.mjs, etc.

## 4. Coding Standards
**Formatting**:
- Indentation 4 spaces 
- Line length 80 characters
**Naming Conventions**:
- Files: kebab-case
- Components: PascalCase
- variables: camelCase

## 5. AI Collaboration Rules
**Prohibited Actions**:
- Never modify .env files
- Do not install dependencies without asking
- Avoid breaking changes to public APIs

**Required Practices**:
- Always include tests for new public interface methods
- Follow existing error handling patterns
- Update documentation for any API or public interface changes    

