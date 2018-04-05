/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

class LinkedNode {
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
   * @param element
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
   * @param position
   * @param element
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
   * Remove an item from the lists
   * @param {any} element
   */
  remove(element) {
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
   * Returns the index of the element in the list. If the element.
   * does not exist in the list, it returns -1.
   * @param element
   */
  indexOf(element) {

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
   */
  isEmpty() {

  }

  /**
   * Returns the number of elements contained in the list.
   */
  size() {

  }

  /**
   * Rewrite the toString from Object.
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
}
