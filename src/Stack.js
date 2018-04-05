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


/**
 * Convert Decimal to any other hex
 * @param {number} num
 * @param {number} targetHex
 */
export function convertHexadecimal(num, targetHex) {
  let result = ''
  const stack = new Stack()
  while (num) {
    stack.push(num % targetHex)
    num = Math.floor(num / targetHex)
  }
  while (stack.size()) {
    result += stack.pop()
  }
  return parseInt(result)
}
