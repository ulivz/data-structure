import Queue, { PriorityQueue } from '../src/Queue'

test('Queue', () => {
  const stack = new Stack()
  expect(stack.size()).toBe(0)
  stack.push(1)
  expect(stack.peek()).toBe(1)
  stack.push(2)
  stack.push(3)
  stack.pop()
  expect(stack.size()).toBe(2)
})
