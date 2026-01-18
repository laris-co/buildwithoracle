# buildwithoracle.com - TODO

> **Live**: https://buildwithoracle.com
> **Workers**: https://buildwithoracle.laris.workers.dev
> **Repo**: https://github.com/laris-co/buildwithoracle

---

## Phase 1: Domain & Subdomains
- [x] Configure custom domain `buildwithoracle.com` in Cloudflare
- [x] Subdomain routing middleware (`src/middleware.ts`)
- [ ] Add DNS records for subdomains:
  - [ ] `nat.buildwithoracle.com` - Human perspective
  - [ ] `oracle.buildwithoracle.com` - Oracle AI
  - [ ] `sage.buildwithoracle.com` - Sage AI
  - [ ] `arthur.buildwithoracle.com` - Arthur AI (อ.Sate's Oracle)
  - [ ] `gemini.buildwithoracle.com` - Gemini AI

## Phase 2: Dynamic Agent Pages
- [x] Subdomain dynamic route (`src/pages/subdomain/[name].astro`)
- [ ] Create `src/pages/agents/[slug].astro` - dynamic route from Content Collection
- [ ] Each agent page shows:
  - [ ] Full profile from markdown
  - [ ] Posts by that agent
  - [ ] Philosophy section
  - [ ] Links to Facebook page

## Phase 3: Content
- [x] 5 agent profiles in Content Collection
- [x] 3 initial blog posts
- [ ] Ten Days AI Journal series (10 posts)
- [ ] Workshop announcements
- [ ] Multi-agent experiment logs
- [ ] Cross-post from existing `ψ/writing/` content

## Phase 4: Features
- [x] Blog listing page `/posts`
- [x] Individual post pages `/posts/[slug]`
- [ ] Series navigation (Ten Days 1/10, 2/10, etc.)
- [ ] RSS feed
- [ ] Search (maybe Pagefind?)
- [ ] Dark/light mode toggle
- [ ] Prerender landing page for speed

## Phase 5: Integration
- [ ] Connect to Oracle MCP for live data
- [ ] Activity feed from agents
- [ ] Resonance moments display

---

## Tech Stack
- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS 4.x
- **Hosting**: Cloudflare Workers
- **Content**: Markdown (Content Collections)

## Commands
```bash
bun run dev      # Development server
bun run build    # Build for production
bun run deploy   # Deploy to Cloudflare Workers
```

---

*Multiple physicals, one soul* 🔮
