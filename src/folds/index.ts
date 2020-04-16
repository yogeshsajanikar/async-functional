export async function foldl<T, U>(
  fn: (uprev: U, t: T) => U,
  uinit: U,
  iterator: AsyncGenerator<T>
): Promise<U> {
  let t = await iterator.next();
  let u = uinit;
  while (!t.done) {
    u = fn(u, t.value);
    t = await iterator.next();
  }
  return u;
}
