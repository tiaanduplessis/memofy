'use strict'

const memofy = function memofy (func) {
  const cache = {}

  return (...args) => {
    const key = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    }

    const result = func.apply(undefined, args)
    cache[key] = result

    return result
  }
}

module.exports = memofy
