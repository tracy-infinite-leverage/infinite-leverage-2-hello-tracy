# Infinite Leverage 2 — Project Instructions

## Stack
- Website: Next.js 16 App Router + Tailwind + shadcn (`website/`)
- Database: Supabase
- Deployment: Vercel (auto-deploy on `git push origin main`)
- Email: Resend

## Folder structure
```
infinite-leverage-2-hello-tracy/
├── agents/              ← Project-specific agent context and skills
│   └── {agent}/
│       ├── context/     ← persona.md, workflow files
│       └── skills/      ← project-specific skills
├── content/
│   ├── topics/          ← One folder per post: brief.md → blog.md
│   └── content-calendar/
├── docs/
│   ├── architecture/
│   │   ├── templates/   ← Reusable doc templates
│   │   └── workflows/   ← System workflow diagrams and specs
│   ├── brand/           ← Palette, voice, visual identity
│   ├── engineering/
│   │   ├── changes/     ← Change records
│   │   └── prompts/     ← Setup and bootstrap prompts
│   ├── features/        ← Per-feature proposals and design docs
│   ├── plans/           ← Project and feature plans (one file per plan)
│   ├── product/         ← Vision, epics, phased timeline
│   ├── qa/              ← QA plan and regression reports
│   └── archive/         ← Historical and superseded material
├── emails/drafts/       ← Email drafts before sending
├── resources/           ← Design system, brand assets
├── standup/
│   ├── individual/      ← Per-person daily check-ins
│   └── briefings/       ← Compiled daily briefings (YYYY-MM/YYYY-MM-DD.md)
├── website/             ← Next.js app root
│   └── src/app/         ← Pages and components
├── working_files/       ← Git-ignored scratch space
└── .claude/             ← Project-level agents, skills, rules
```

## Content pipeline
1. Add `brief.md` to `content/topics/{slug}/` to queue a post
2. Writer writes `blog.md` on Monday
3. Designer generates hero image on Tuesday
4. Web Publisher builds and stages the page on Wednesday
5. Owner runs `git push origin main` to deploy

## Publishing
Never push directly. All deploys via `git push origin main` → Vercel CI/CD.
Never commit `.env.local` or any secrets.
