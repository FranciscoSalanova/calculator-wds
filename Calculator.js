export default class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.primaryOperandDisplay = primaryOperandDisplay
    this.secondaryOperandDisplay = secondaryOperandDisplay
    this.operationDisplay = operationDisplay

    this.clearAll()
  }

  get primaryOperand() {
    return parseFloat(this.primaryOperandDisplay.textContent)
  }

  set primaryOperand(value) {
    this.primaryOperandDisplay.textContent = value ?? ""
  }

  set secondaryOperand(value) {
    this.secondaryOperandDisplay.textContent = value ?? ""
  }

  set operation(value) {
    this.operationDisplay.textContent = value ?? ""
  }

  /** Clear all the content from the output section of the calculator. */
  clearAll() {
    this.primaryOperand = 0
    this.secondaryOperand.textContent = null
    this.operation.textContent = null
  }

  addDigit(digit) {
    if (this.primaryOperand === 0) {
      this.primaryOperand = digit
      return
    }
    this.primaryOperand = this.primaryOperand.toString() + digit
  }
  removeDigit() {}
  chooseOperation(operand) {}
  evaluate() {}
}
