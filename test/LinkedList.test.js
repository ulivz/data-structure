import LinkedList from '../src/LinkedList'

test('LinkedList', () => {
  const linkedList = new LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  expect(linkedList.toString()).toBe('1,2,3')
})

test('LinkedList - insert', () => {
  const linkedList = new LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
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
  const linkedList = new LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.removeAt(1)
  expect(linkedList.toString()).toBe('1,3')
})
