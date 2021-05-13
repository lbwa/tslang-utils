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
    - [isWin](#iswin)
    - [isLinux](#islinux)
    - [isMac](#ismac)
  - [Types](#types)
    - [First](#first)
    - [Last](#last)
    - [PromiseValue](#promisevalue)
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
isSever() // boolean
```

### isBrowser

Whether current JS runtime is in the browser environment.

```ts
isBrowser() // boolean
```

### isWin

Whether we are in Windows

```ts
import { isWin } from 'tslang-utils'

isWin() // boolean
```

### isLinux

Whether we are in linux

```ts
import { isLinux } from 'tslang-utils'

isLinux() // boolean
```

### isMac

Whether we are in mac os

```ts
import { isMac } from 'tslang-utils'

isMac() // boolean
```

## Types

### First

get first element type in array

```ts
import { First } from 'tslang-utils/dist/type'

type FirstElement = First<[1, 2, 3, 4, 5]> // 1
```

### Last

get last element type in array

```ts
import { Last } from 'tslang-utils/dist/type'

type LastElement = Last<1, 2, 3, 4, 5> // 5
```

### PromiseValue

infer fulfilled promise instance value

```ts
import { PromiseValue } from 'tslang-utils/dist/type'

type promiseValue = PromiseValue<Promise<boolean>> // boolean
```

## License

[MIT](./LICENSE) © [Liu Bowen](https://github.com/lbwa)
