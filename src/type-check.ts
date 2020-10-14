/**
 * Determines whether value is defined?
 */
export function isDef<V>(val: V): val is NonNullable<V> {
  return val !== undefined && val !== null
}

/**
 * Determines whether value is Function type?
 */
export function isFunc(val: unknown): val is Function {
  return typeof val === 'function'
}

/**
 * Determines whether value is string type
 */
export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

/**
 * Determines whether value is number type?
 * @param val any value type
 * @param strict whether we should ignore `NaN` from number type? default: false
 */
export function isNumber(val: unknown, strict = false): val is number {
  return strict ? isStrictNumber(val) : typeof val === 'number'
}

/**
 * Determines whether value is strict number(exclude NaN)?
 */
export function isStrictNumber(val: unknown): val is number {
  return isNumber(val) && !isNaN(val)
}

const _hasOwnProp = Object.prototype.hasOwnProperty
/**
 * Determines whether an object has a property with the specified name.
 */
export function hasOwnProp<V extends object>(
  val: V,
  key: string | number | symbol
): key is keyof V {
  return _hasOwnProp.call(val, key)
}
