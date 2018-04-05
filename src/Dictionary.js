export default class Dictionary {
  constructor() {
    this.elements = {}
  }

  /**
   * Add key value pairs in the dictionary.
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    this.elements[key] = value
  }

  /**
   * Remove element from the dictionary by giving a key.
   * @param {string} key
   * @returns {boolean}
   */
  remove(key) {
    if (!this.has(key)) return false

    delete this.elements[key]
    return true
  }

  /**
   * Check if an element is existed in the dictionary.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return this.elements.hasOwnProperty(key)
  }

  /**
   * Get an element's value by giving a key.
   * @param {string} key
   * @returns {any|undefined}
   */
  get(key) {
    return this.has(key) ? this.elements[key] : undefined
  }

  /**
   * Clear current dictionary.
   */
  clear() {
    this.elements = {}
  }

  /**
   * Get the size of current dictionary.
   */
  size() {
    return this.keys().length
  }

  /**
   * Get all the keys of current dictionary.
   * @returns {Array}
   */
  keys() {
    return Object.keys(this.elements)
  }

  /**
   * Get all the values of current dictionary.
   * @returns {Array}
   */
  values() {
    // ESNext Object.values.
    return this.keys().map(key => this.elements[key])
  }
}
