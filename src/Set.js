export default class Set {
  constructor() {
    this.elements = {}
  }

  /**
   * Check if a value is existed in this set.
   * @param {string|number} value
   * @returns {boolean}
   */
  has(value) {
    return this.elements.hasOwnProperty(value)
  }

  /**
   * Add a value in this set.
   * @param {string|number} value
   * @returns {boolean}
   */
  add(value) {
    if (this.has(value)) return false
    this.elements[value] = value
    return true
  }

  /**
   * Remove a value from this set.
   * @param {string|number} value
   * @returns {boolean}
   */
  remove(value) {
    if (!this.has(value)) return false
    delete this.elements[value]
  }

  /**
   * Clear this set.
   */
  clear() {
    this.elements = {}
  }

  /**
   * Get this set's length.
   * @returns {number}
   */
  size() {
    return this.values().length
  }

  /**
   * Get this set's values.
   * @returns {Array}
   */
  values() {
    return Object.keys(this.elements)
  }
}
