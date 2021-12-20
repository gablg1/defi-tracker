
export function assert(fn) {
  if (!fn()) {
    throw new Error("Assertion failed");
  }
}
