/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

export default class Queue {
  constructor() {
    this.elements = []
  }

  enqueue(element) {
    this.elements.push(element)
  }

  dequeue() {
    return this.elements.shift()
  }

  front() {
    return this.elements[0]
  }

  isEmpty() {
    return this.elements.length === 0
  }

  size() {
    return this.elements.length
  }
}


class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

/**
 * A priority queue, the greater the number, the higher the priority.
 */
export class PriorityQueue {
  constructor() {
    this.elements = []
  }

  enqueue(element, priority) {

    if (!priority) {
      if (this.isEmpty()) {
        priority = 0
      } else {
        priority = this.elements[this.size() - 1].priority - 1
      }
    }

    const queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      this.elements.push(queueElement)
    } else {
      let added = false
      for (const [index, el] of this.elements.entries()) {
        if (queueElement.priority > el.priority) {
          this.elements.splice(index, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        this.elements.push(queueElement)
      }
    }
  }

  dequeue() {
    return this.elements.shift()
  }

  front() {
    return this.elements[0]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.elements.length
  }
}
