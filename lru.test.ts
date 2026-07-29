import { LRU } from "./lru.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("evicts oldest", () => {
  const c = new LRU<string, number>(2);
  c.put("a", 1); c.put("b", 2); c.get("a"); c.put("c", 3);
  assert.equal(c.get("b"), undefined);
  assert.equal(c.get("a"), 1);
});
