export class DoublyLinkedNode {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

export default class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  /**
   * Add a new element to the tail of the list.
   * @param {any} element
   */
  append(element) {
    const newNode = new DoublyLinkedNode(element)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
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

    const newNode = new DoublyLinkedNode(element)

    if (position === 0) {
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      }

    } else if (position === this.length) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode

    } else {
      let current = this.head
      let previous = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = newNode
      newNode.prev = previous
      newNode.next = current
      current.prev = newNode
    }

    this.length++
    return true
  }

  /**
   * Remove an item from the specific location of the list.
   * @param {number} position
   * @returns {any} the deleted element
   */
  removeAt(position) {
    if (position < 0 || position >= this.length) return null

    let current = this.head
    if (position === 0) {
      if (this.length == 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }

    } else if (position === this.length - 1) {
      current = this.tail
      this.tail = this.tail.prev
      this.tail.next = null

    } else {
      let index = 0
      let previous = null

      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
      current.next.prev = previous
    }

    this.length--
    return current.element
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
  getHead() {
    return this.head.element
  }

  /**
   * Get last element from list.
   * @returns {any} element
   */
  getTail() {
    return this.tail.element
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

  /**
   * Rewrite the toString from Object.
   * @returns {string}
   */
  toString() {
    return this.forwardString()
  }

  /**
   * toString with forward traversal.
   * @returns {string}
   */
  forwardString() {
    let current = this.head
    let forwardStr = ''
    while (current) {
      forwardStr += ',' + current.element
      current = current.next
    }
    return forwardStr.slice(1)
  }

  /**
   * toString with reverse traversal.
   * @returns {string}
   */
  reverseString() {
    let current = this.tail
    let reverseStr = ''
    while (current) {
      reverseStr += ',' + current.element
      current = current.prev
    }
    return reverseStr.slice(1)
  }
}
