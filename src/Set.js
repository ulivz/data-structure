export default class Set {
  constructor() {
    this.elements = {}
  }

  has(value) {
    return this.elements.hasOwnProperty(value)
  }

  add(value) {
    if (this.has(value)) return false
    this.elements[value] = value
    return true
  }

  remove(value) {
    if (!this.has(value)) return false
    delete this.elements[value]
  }

  clear() {
    this.elements = {}
  }

  size() {
    return this.values().length
  }

  values() {
    return Object.keys(this.elements)
  }
}
