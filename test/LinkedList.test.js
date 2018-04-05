import LinkedList from '../src/LinkedList'

test('LinkedList', () => {
  const linkedList = new LinkedList()
  linkedList.append(123)
  linkedList.append(456)
  linkedList.append(789)
  console.log(linkedList)
  console.log(linkedList.toString())
})
