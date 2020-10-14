import { hasOwnProp, isDef, isFunc, isNumber, isString } from './type-check'

describe('Type checker', () => {
  it('should return defined', () => {
    const a = { name: 'a' }
    expect(isDef(a.name)).toBeTruthy()
  })

  it('should return a function type', () => {
    let func: number | ((a: number) => void) = jest.fn()
    if (isFunc(func)) {
      // should (a: number) => void, not only Function type
      func(12)
    }
    expect(func).toBeCalledTimes(1)
    expect(func).toBeCalledWith(12)
  })

  it('should return string type', () => {
    expect(isString(1)).toBeFalsy()
    expect(isString('1')).toBeTruthy()
    expect(isString(() => {})).toBeFalsy()
    expect(isString({})).toBeFalsy()
    expect(isString(true)).toBeFalsy()
    expect(isString(undefined)).toBeFalsy()
    expect(isString(null)).toBeFalsy()
    expect(isString(NaN)).toBeFalsy()
    expect(isString(Symbol(1))).toBeFalsy()
  })

  it('should return number type', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber('1')).toBeFalsy()
    expect(isNumber(() => {})).toBeFalsy()
    expect(isNumber({})).toBeFalsy()
    expect(isNumber(true)).toBeFalsy()
    expect(isNumber(undefined)).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber(NaN)).toBeTruthy()
    expect(isNumber(NaN, true)).toBeFalsy()
    expect(isNumber(Symbol(1))).toBeFalsy()
  })

  it('should pass hasOwnProp tests', () => {
    expect(hasOwnProp({}, 'name')).toBeFalsy()
    expect(hasOwnProp({ name: 1 }, 'age')).toBeFalsy()
    expect(hasOwnProp({ name: undefined }, 'name')).toBeTruthy()
    expect(hasOwnProp({ name: 'js' }, 'name')).toBeTruthy()
  })
})
