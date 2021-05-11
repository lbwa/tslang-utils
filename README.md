# tslang utils

Some functional/semantic codes for TypeScript(JavaScript) development.

![Pipeline](https://github.com/lbwa/tslang-utils/workflows/Pipeline/badge.svg) <img alt="npm (tag)" src="https://img.shields.io/npm/v/tslang-utils/latest?style=flat-square"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tslang-utils?style=flat-square">

<!-- TOC -->

- [tslang utils](#tslang-utils)
  - [installation](#installation)
  - [type checker](#type-checker)
    - [isDef](#isdef)
    - [isFunc](#isfunc)
    - [isString](#isstring)
    - [isNumber](#isnumber)
    - [isStrictNumber](#isstrictnumber)
    - [hasOwnProp](#hasownprop)
  - [Env](#env)
    - [isServer](#isserver)
    - [isBrowser](#isbrowser)
  - [License](#license)

<!-- /TOC -->

## installation

```bash
$ yarn add tslang-utils
```

## type checker

### isDef

Whether value isn't `undefined` or `null`.

```ts
const a = { name: 'github user', bio: null }

isDef(a.name) // true
isDef(a.age) // false
isDef(a.bio) // false
```

### isFunc

Whether value is `Function` type

```ts
isFunc(() => {}) // true
isFunc(true) // false
```

### isString

```ts
isString('') // true
isString(true) // false
```

### isNumber

Whether value is `Number` type. It will omit `NaN` when we set second parameter to `true`.

```ts
isNumber(0) // true
isNumber(NaN) // true
isNumber(NaN, true) // false
```

### isStrictNumber

Equivalent to `isNumber(/* value */, true)`.

### hasOwnProp

Whether an object has a property with the specified name.

```ts
const a = { name: 'github user', bio: null }

hasOwnProp(a, 'name') // true
hasOwnProp(a, 'toString') // false
```

## Env

### isServer

Whether current JS runtime is in the server([node.js](https://nodejs.org)) environment.

```ts
isSever() // true or false
```

### isBrowser

Whether current JS runtime is in the browser environment.

```ts
isBrowser() // true or false
```

## License

[MIT](./LICENSE) © [Liu Bowen](https://github.com/lbwa)
