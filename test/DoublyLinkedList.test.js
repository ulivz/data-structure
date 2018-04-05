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
