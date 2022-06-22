A lib to extend mockjs Random's methods

## usage

```js
import '@autel/mock-extend'
import { Random } from 'mockjs'

// then you can call extended method like Random.unix()
console.log(Random.unix())
```

## Resources

- [mockjs](https://github.com/nuysoft/Mock), mockjs github
- [@mockjs/core](https://npm.runkit.com/@mockjs/core/src/mock/random/address/address.ts?t=1655863119087), mockjs ts version

## test

### use `babel-test`

install dependences

```sh
pnpm install --save-dev babel-jest @babel/core @babel/preset-env
# for ts
pnpm install --save-dev @babel/preset-typescript
```

create babel config file

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript', // ts
  ],
}
```

```js
// jest.config.ts
export default {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
```

### use `ts-jest`

```js
// jest.config.ts
export default {
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
}
```
