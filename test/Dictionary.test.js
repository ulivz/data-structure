import Dictionary from '../src/Dictionary'

test('Dictionary', () => {
  const dict = new Dictionary()
  dict.set('name', 'ulivz')
  dict.set('age', 24)

  expect(dict.size()).toBe(2)
  expect(dict.has('name')).toBe(true)
  expect(dict.get('name')).toBe('ulivz')
  expect(dict.has('name1')).toBe(false)

  expect(dict.keys()).toEqual(['name', 'age'])
  expect(dict.values()).toEqual(['ulivz', 24])

  dict.clear()
  expect(dict.size()).toBe(0)
})
