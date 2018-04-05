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
   * Add a new element to the tail of the list
   * @param element
   */
  append(element) {
    const node = new LinkedNode(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  /**
   * insert a new element into the specific position of the list.
   * @param position
   * @param element
   */
  insert(position, element) {
  }

  /**
   * Remove an item from the lists
   * @param element
   */
  remove(element) {

  }

  /**
   * Returns the index of the element in the list. If the element
   * does not exist in the list, it returns -1.
   * @param element
   */
  indexOf(element) {

  }

  /**
   * Remove an item from the specific location of the list
   * @param position
   */
  removeAt(position) {

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

  toString() {

  }
}
