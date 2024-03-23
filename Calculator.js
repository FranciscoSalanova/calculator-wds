export default class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.primaryOperand = primaryOperandDisplay
    this.secondaryOperand = secondaryOperandDisplay
    this.operation = operationDisplay

    this.clearAll()
  }

  /** Clear all the content from the output section of the calculator. */
  clearAll() {
    this.primaryOperand.textContent = 0
    this.secondaryOperand.textContent = ''
    this.operation.textContent = ''
  }

  /** Adds a new digit to the primary operand section of the output. */
  addDigit(digit) {
    if (this.primaryOperand.textContent === '0') {
      this.primaryOperand.textContent = ''
    }
    this.primaryOperand.textContent = this.primaryOperand.textContent + digit
  }

  /** Removes the last digit from the primary operand section of the output. */
  removeDigit() {
    if (this.primaryOperand.textContent === '0') return
    this.primaryOperand.textContent = this.primaryOperand.textContent.slice(
      0,
      this.primaryOperand.textContent.length - 1
    )
  }

  chooseOperation(operand) {}
  evaluate() {}
}
