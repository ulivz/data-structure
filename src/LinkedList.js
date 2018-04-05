export class LinkedNode {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  /**
   * Add a new element to the tail of the list.
   * @param {any} element
   */
  append(element) {
    const newNode = new LinkedNode(element)
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  /**
   * insert a new element into the specific position of the list.
   * @param {number} position
   * @param {any} element
   */
  insert(position, element) {
    if (position < 0 || position > this.length) return false
    const newNode = new LinkedNode(element)
    let current = this.head
    let previous = null
    let index = 0
    if (position === 0) {
      newNode.next = current
      this.head = newNode
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
    }
    this.length++
    return true
  }

  /**
   * Remove an item from the lists.
   * @param {any} element
   * @returns {any} the deleted element
   */
  remove(element) {
    const position = this.indexOf(element)
    return this.removeAt(position)
  }

  /**
   * Returns the index of the element in the list. If the element.
   * does not exist in the list, it returns -1.
   * @param {any} element
   * @returns {number} index
   */
  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  /**
   * Remove an item from the specific location of the list.
   * @param {number} position
   * @returns {any} the deleted element
   */
  removeAt(position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let previous = null
    let index = 0
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element
  }

  /**
   * If the list does not contain any elements, it returns to true.
   * If the length of the linked list is greater than 0, it returns false.
   * @returns {boolean} is empty
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Returns the number of elements contained in the list.
   * @returns {number} size
   */
  size() {
    return this.length
  }

  /**
   * Get first element from list.
   * @returns {any} element
   */
  getFirst() {
    return this.head.element
  }

  /**
   * Rewrite the toString from Object.
   * @returns {string}
   */
  toString() {
    let current = this.head
    let listString = ''
    while (current) {
      listString += ',' + current.element
      current = current.next
    }
    return listString.slice(1)
  }

  /**
   * Clean current list's data.
   */
  clear() {
    let current = this.head
    let index = 0
    while (current) {
      current.element = null
      current.next = null
      current = current.next
      index++
    }
    this.head = null
    current = null
    this.length = 0
  }
}
