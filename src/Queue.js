/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

export default class Queue {
  constructor() {
    this.items = []
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

export class PriorityQueue {

}
