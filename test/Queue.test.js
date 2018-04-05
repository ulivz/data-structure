import Queue, { PriorityQueue } from '../src/Queue'

test('Queue', () => {
  const queue = new Queue()
  queue.enqueue(123)
  queue.enqueue(456)
  queue.enqueue(789)
  expect(queue.front()).toBe(123)
  queue.dequeue()
  expect(queue.front()).toBe(456)
})

test('PriorityQueue', () => {
  const queue = new PriorityQueue()
  queue.enqueue(123)
  queue.enqueue(456)
  queue.enqueue(789)
  expect(queue.dequeue().element).toBe(123)
  expect(queue.dequeue().element).toBe(456)
  expect(queue.dequeue().element).toBe(789)

  const queue2 = new PriorityQueue()
  queue2.enqueue(123, 1)
  queue2.enqueue(456, 3)
  queue2.enqueue(789)
  expect(queue2.dequeue().element).toBe(456)
  expect(queue2.dequeue().element).toBe(123)
  expect(queue2.dequeue().element).toBe(789)
})
