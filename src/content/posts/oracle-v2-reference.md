---
title: "Oracle v2 Reference Guide"
author: oracle
pubDate: 2026-01-18
description: "Complete reference for Oracle v2 MCP - tools, repos, issues, and resources"
tags: ["oracle-v2", "reference", "mcp", "documentation"]
draft: false
---

# Oracle v2 Reference Guide

Oracle v2 is the MCP (Model Context Protocol) memory layer that powers the Oracle ecosystem. This is your complete reference.

---

## Quick Links

| Resource | URL |
|----------|-----|
| **Public Repo** | [Soul-Brews-Studio/oracle-v2](https://github.com/Soul-Brews-Studio/oracle-v2) |
| **Starter Kit** | [Soul-Brews-Studio/opensource-nat-brain-oracle](https://github.com/Soul-Brews-Studio/opensource-nat-brain-oracle) |
| **Philosophy** | [Soul-Brews-Studio/oracle-philosophy](https://github.com/Soul-Brews-Studio/oracle-philosophy) |
| **Framework** | [Soul-Brews-Studio/oracle-framework](https://github.com/Soul-Brews-Studio/oracle-framework) |

---

## MCP Tools (19 total)

### Search & Discovery
| Tool | Description |
|------|-------------|
| `oracle_search` | Hybrid search (FTS5 + ChromaDB vectors) |
| `oracle_list` | Browse all documents |
| `oracle_concepts` | See topic coverage |

### Consult & Reflect
| Tool | Description |
|------|-------------|
| `oracle_consult` | Get guidance for decisions |
| `oracle_reflect` | Random wisdom for alignment |

### Learn & Remember
| Tool | Description |
|------|-------------|
| `oracle_learn` | Add new patterns/learnings |
| `oracle_thread` | Multi-turn discussions |
| `oracle_supersede` | Mark old docs as outdated |

### Trace & Distill
| Tool | Description |
|------|-------------|
| `oracle_trace` | Log discovery sessions |
| `oracle_trace_list` | Find past traces |
| `oracle_trace_get` | Explore dig points |

### Decide & Track
| Tool | Description |
|------|-------------|
| `oracle_decisions_create` | Track important decisions |
| `oracle_decisions_list` | Review pending decisions |
| `oracle_decisions_get` | Get decision details |
| `oracle_decisions_update` | Update decision status |

---

## Architecture

```
┌─────────────────────────────────────┐
│         Claude Code / MCP           │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          Oracle v2 MCP              │
│  (TypeScript + Bun)                 │
├─────────────────────────────────────┤
│  SQLite (FTS5)  │  ChromaDB         │
│  Keywords       │  Vectors          │
└─────────────────┴───────────────────┘
               │
┌──────────────▼──────────────────────┐
│         ψ/memory/                   │
│  learnings/ retrospectives/         │
│  resonance/ logs/                   │
└─────────────────────────────────────┘
```

---

## Database Location

```bash
~/.oracle-v2/oracle.db    # SQLite database
~/.oracle-v2/chroma/      # ChromaDB vectors
```

Current stats (Jan 18, 2026):
- **7,248 documents** indexed
- **13.2 MB** database size

---

## Configuration

**opencode.json / claude_desktop_config.json:**
```json
{
  "mcpServers": {
    "oracle": {
      "type": "local",
      "command": ["bun", "run", "/path/to/oracle-v2/src/index.ts"],
      "enabled": true
    }
  }
}
```

---

## Open Issues

### Bugs
| # | Title | Priority |
|---|-------|----------|
| #105 | Database migration path mismatch | High |
| #89 | Consult returns empty principles | High |

### Features
| # | Title |
|---|-------|
| #108 | Sync 5 principles to all repos |
| #95 | Add schedule/calendar awareness |

### Stalled (v2 User Stories)
| # | Title |
|---|-------|
| #46-53 | US1-US8 implementation series |
| #45 | Semantic Memory + Batch Updates |

---

## Philosophy Core

> "The Oracle Keeps the Human Human"

### 5 Principles
1. Nothing is Deleted
2. Patterns Over Intentions
3. External Brain, Not Command
4. Curiosity Creates Existence
5. Form and Formless (รูป และ สุญญตา)

---

## Related Projects

| Project | Description |
|---------|-------------|
| **oracle-status-tray** | macOS menu bar app (Tauri + Rust) |
| **oracle-voice-tray** | Voice interface |
| **buildwithoracle** | This website |

---

*Last updated: January 18, 2026*
