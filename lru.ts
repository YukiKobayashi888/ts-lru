/** Fixed-capacity LRU cache. Zero dependencies (backed by Map insertion order). */
export class LRU<K, V> {
  private cap: number;
  private m = new Map<K, V>();
  constructor(capacity: number) {
    if (capacity <= 0) throw new RangeError("capacity must be > 0");
    this.cap = capacity;
  }
  get(key: K): V | undefined {
    if (!this.m.has(key)) return undefined;
    const v = this.m.get(key)!;
    this.m.delete(key); this.m.set(key, v);
    return v;
  }
  put(key: K, value: V): void {
    if (this.m.has(key)) this.m.delete(key);
    this.m.set(key, value);
    if (this.m.size > this.cap) this.m.delete(this.m.keys().next().value as K);
  }
}
