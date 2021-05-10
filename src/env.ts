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

export function isWin() {
  return process.platform === 'win32'
}

export function isLinux() {
  return process.platform === 'linux'
}

export function isMac() {
  return process.platform === 'darwin'
}
