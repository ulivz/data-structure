import DoublyLinkedList from '../src/DoublyLinkedList'

const dll = new DoublyLinkedList()

beforeEach(() => {
  dll.append(1)
  dll.append(2)
  dll.append(3)
})

afterEach(() => {
  dll.clear()
})

test('DoublyLinkedList', () => {
  expect(dll.toString()).toBe('1,2,3')
  expect(dll.forwardString()).toBe('1,2,3')
  expect(dll.reverseString()).toBe('3,2,1')
})

test('DoublyLinkedList - insert', () => {
  // insert at head
  dll.insert(0, 0)
  expect(dll.toString()).toBe('0,1,2,3')

  dll.insert(2, 4)
  expect(dll.toString()).toBe('0,1,4,2,3')

  dll.insert(5, 5)
  expect(dll.toString()).toBe('0,1,4,2,3,5')
})
