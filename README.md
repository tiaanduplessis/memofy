
<h1 align="center">memofy</h1>
<div align="center">
  <strong>Memoize a function</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/memofy">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/memofy.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://codecov.io/gh/tiaanduplessis/memofy">
  <img src="https://codecov.io/gh/tiaanduplessis/memofy/branch/master/graph/badge.svg" alt="Codecov" />
</a>
  <a href="https://npmjs.org/package/@tiaanduplessis/memofy">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/memofy.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/@tiaanduplessis/memofy">
    <img src="https://img.shields.io/travis/tiaanduplessis/@tiaanduplessis/memofy.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/memofy/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/memofy.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/memofy/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/memofy.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/memofy/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/memofy.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20memofy!%20https://github.com/tiaanduplessis/memofy%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/memofy.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/memofy/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install @tiaanduplessis/memofy
# OR
$ yarn add @tiaanduplessis/memofy
```

## Usage

```js
const memofy = require('@tiaanduplessis/memofy')

const add = (...args) => args.reduce((a, b) => a + b)
const memofyAdd = memofy(add)

console.log(memofyAdd(1, 2, 3)) // Result of 6 added to cache
console.log(memofyAdd(1, 2, 3)) // Hits cache
console.log(memofyAdd(1, 2, 5)) // Result of 8 added to cache
console.log(memofyAdd(1, 2, 3)) // Hits cache
console.log(memofyAdd(1, 2, 5)) // Hits cache

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/memofy/issues).

## License

Licensed under the MIT License.
