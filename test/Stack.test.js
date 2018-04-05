import { Stack } from '../src'
import { convertHexadecimal } from '../src/Stack.usage'

test('stack', () => {
  const stack = new Stack()
  expect(stack.size()).toBe(0)
  stack.push(1)
  expect(stack.peek()).toBe(1)
  stack.push(2)
  stack.push(3)
  stack.pop()
  expect(stack.size()).toBe(2)
})

test('stack - hexadecimal conversion', () => {
  expect(convertHexadecimal(5, 2)).toBe(101)
  expect(convertHexadecimal(10, 2)).toBe(1010)
})
