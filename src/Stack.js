/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

export default class Stack {
  constructor() {
    this.elements = []
  }

  push(element) {
    this.elements.push(element)
  }

  pop() {
    return this.elements.pop()
  }

  peek() {
    return this.elements[this.elements.length - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.elements.length
  }
}
