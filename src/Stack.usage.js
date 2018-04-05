/*!
 * @ulivz/data-structure v0.0.1
 * (c) 2016-2018 ULIVZ
 * Released under the MIT License.
 */

import Stack from './Stack'

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
