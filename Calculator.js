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

  /** Gets the primary operand parsed into a float in order to perform operations. */
  get primaryOperand() {
    return parseFloat(this.primaryOperandDisplay.dataset.value)
  }

  /** Sets the primary operand into the dataset and the text content from the HTML element. */
  set primaryOperand(value) {
    this.primaryOperandDisplay.dataset.value = value ?? ""
    this.primaryOperandDisplay.textContent = displayNumber(value ?? "")
  }

  /** Sets the secondary operand into the dataset and the text content from the HTML element. */
  set secondaryOperand(value) {
    this.secondaryOperandDisplay.dataset.value = value ?? ""
    this.secondaryOperandDisplay.textContent = displayNumber(value)
  }

  /** Sets the operand selected into the text content from the HTML element. */
  set operation(value) {
    this.operationDisplay.textContent = value ?? ""
  }

  /** Clear all the content from the output section of the calculator. */
  clearAll() {
    this.primaryOperand = 0
    this.secondaryOperand = null
    this.operation = null
  }

  addDigit(digit) {
    if (digit === "." && this.primaryOperandDisplay.dataset.value.includes("."))
      return
    if (this.primaryOperand === 0) {
      this.primaryOperand = digit
      return
    }
    this.primaryOperand = this.primaryOperandDisplay.dataset.value + digit
  }

  removeDigit() {}
  chooseOperation(operand) {}
  evaluate() {}
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en")

function displayNumber(number) {
  const stringNumber = number?.toString() || ""
  if (stringNumber === "") return ""
  const [integer, decimal] = stringNumber.split(".")
  const formattedInteger = NUMBER_FORMATTER.format(integer)
  if (decimal == null) return formattedInteger
  return formattedInteger + "." + decimal
}
