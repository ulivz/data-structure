import Set from '../src/Set'

test('Set', () => {
  const set = new Set()
  set.add(1)
  set.add(1)
  set.add(1)
  set.add(2)
  set.add(3)
  expect(set.size()).toBe(3)
  expect(set.values()).toEqual(['1', '2', '3'])
  expect(set.has(1)).toBe(true)
  expect(set.has(3)).toBe(true)
  expect(set.has(4)).toBe(false)
  set.remove(3)
  expect(set.has(3)).toBe(false)
  set.clear()
  expect(set.size()).toBe(0)
})
