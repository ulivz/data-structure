import Stack from './Stack'

// Hexadecimal conversion
// 5  => 0101
// 10 => 1010

/**
 * Convert Decimal to any other hex
 * @param num
 * @param targetHex
 */
export function convertHexadecimal(num, targetHex) {
  // num / targetHex
  // 5   / 2          = 2 y 1
  // 2   / 2          = 1 y 0
  // 1   / 2          = 0 y 1

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
