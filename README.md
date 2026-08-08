# LRU cache

A small fixed-capacity LRU cache — no dependencies.

TypeScript Lru uses only the typescript standard library; there is no service or dependency to install.

```
lru.ts
```

Run the TypeScript Lru test next to the implementation for concrete examples. The test file covers eviction order, capacity limits, and key updates. If you're integrating this into a larger app, the cache is a plain class, so you can import it and use it directly. Keep the cache size small relative to your working set; that's where it helps the most.