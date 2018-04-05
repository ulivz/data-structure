import HashMap from '../src/HashMap'

test('HashMap', () => {
  const hashMap = new HashMap()
  hashMap.put('name', 'ulivz')
  hashMap.put('age', 24)
  expect(hashMap.get('name')).toBe('ulivz')
  expect(hashMap.get('age')).toBe(24)
})
