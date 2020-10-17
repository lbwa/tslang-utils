/**
 * whether current environment is server(node.js) runtime?
 */
export function isServer() {
  return typeof global !== 'undefined'
}

/**
 * whether current environment is browser runtime?
 */
export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
