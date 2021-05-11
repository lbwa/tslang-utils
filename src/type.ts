/**
 * infer first element type
 */
export type First<T extends unknown[]> = T extends [infer F, ...unknown[]]
  ? F
  : never

/**
 * infer last element type
 */
export type Last<T extends unknown[]> = T extends [...unknown[], infer F]
  ? F
  : never

/**
 * infer promise instance value
 */
export type PromiseValue<P> = P extends PromiseLike<infer V> ? V : never
