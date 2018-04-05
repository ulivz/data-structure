/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

class DoublyLinkedNode {
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
