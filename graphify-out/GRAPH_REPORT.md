# Graph Report - kisiselwebsite  (2026-11-17)

## Corpus Check
- 1 files · ~7,682 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 1 file(s) not represented in the graph (top: .css 1)

## Summary
- 9 nodes · 10 edges · 3 communities (1 shown, 2 thin omitted)
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a978606c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- initTyping
- animateCounter

## God Nodes (most connected - your core abstractions)
1. `initTyping()` - 3 edges
2. `updateLanguage()` - 2 edges
3. `typeLoop()` - 2 edges
4. `animateCounter()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (3 total, 2 thin omitted)

### Community 1 - "initTyping"
Cohesion: 0.67
Nodes (3): initTyping(), typeLoop(), updateLanguage()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `animateCounter()` connect `animateCounter` to `script.js`?**
  _High betweenness centrality (0.250) - this node is a cross-community bridge._
- **Why does `initTyping()` connect `initTyping` to `script.js`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._