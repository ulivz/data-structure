import LinkedList from '../src/LinkedList'

const linkedList = new LinkedList()

beforeEach(() => {
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
})

afterEach(() => {
  linkedList.clear()
})

test('LinkedList', () => {
  expect(linkedList.toString()).toBe('1,2,3')
})

test('LinkedList - insert', () => {
  linkedList.insert(1, 4)
  expect(linkedList.toString()).toBe('1,4,2,3')
  linkedList.insert(2, 5)
  expect(linkedList.toString()).toBe('1,4,5,2,3')
  linkedList.insert(6, 6)
  expect(linkedList.toString()).toBe('1,4,5,2,3')
  linkedList.insert(4, 6)
  expect(linkedList.toString()).toBe('1,4,5,2,6,3')
  linkedList.insert(6, 7)
  expect(linkedList.toString()).toBe('1,4,5,2,6,3,7')
})

test('LinkedList - removeAt', () => {
  linkedList.removeAt(1)
  expect(linkedList.toString()).toBe('1,3')
})

test('LinkedList - indexOf', () => {
  expect(linkedList.indexOf(1)).toBe(0)
  expect(linkedList.indexOf(2)).toBe(1)
  expect(linkedList.indexOf(3)).toBe(2)
  expect(linkedList.indexOf(4)).toBe(-1)
})

test('LinkedList - remove', () => {
  linkedList.remove(2)
  expect(linkedList.toString()).toBe('1,3')
  expect(linkedList.toString()).toBe('1,3')
})
