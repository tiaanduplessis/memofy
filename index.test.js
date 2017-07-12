const memofy = require('./')

test('should invoke function only once', () => {
  const add = jest.fn((...args) => args.reduce((a, b) => a + b))
  const memofyAdd = memofy(add)

  memofyAdd(1, 2, 3)
  memofyAdd(1, 2, 3)
  memofyAdd(1, 2, 3)

  expect(add).toHaveBeenCalledTimes(1)
})
