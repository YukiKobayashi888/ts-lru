# LRU cache

I needed a fixed-capacity LRU cache for a new pricing tier. Pulling in a heavy npm package just to evict old keys doesn't move the needle on revenue. This implementation relies entirely on the standard TypeScript library. Zero external dependencies. You avoid supply chain risks and keep your bundle tiny.

```
lru.ts
```

Look at the test file next to the source. It gives you concrete examples of how to wire it up. Keep things simple and ship the feature.