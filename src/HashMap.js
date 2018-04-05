class HashMap {
  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 8
  }

  /**
   * Hash function.
   * @param str
   * @param max
   * @returns {number}
   */
  hashFunc(str, max) {
    let hashCode = 0

    for (i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }

    hashCode = hashCode % max
    return hashCode
  }

  put(key, value) {
    let index = this.hashFunc(key)
    let bucket = this.storage[index]

    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    let override = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true
      }
    }

    if (!override) {
      bucket.push([key, value])
      this.count++
    }
  }

  get(key) {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]

    if (bucket === null) {
      return null
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    return null
  }

  remove(key) {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]

    if (bucket === null) {
      return null
    }

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
      }
      return tuple[1]
    }

    return null
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() == 0
  }
}
