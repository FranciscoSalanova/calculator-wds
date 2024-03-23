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

  addDigit(digit) {}
  removeDigit() {}
  chooseOperation(operand) {}
  evaluate() {}
}
