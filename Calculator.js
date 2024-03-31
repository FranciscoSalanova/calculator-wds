const NUMBER_FORMATTER = new Intl.NumberFormat("en")

export default class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.#primaryOperandDisplay = primaryOperandDisplay
    this.#secondaryOperandDisplay = secondaryOperandDisplay
    this.#operationDisplay = operationDisplay

    this.clearAll()
  }

  #primaryOperandDisplay
  #secondaryOperandDisplay
  #operationDisplay

  /** Gets the primary operand parsed into a float in order to perform operations. */
  get primaryOperand() {
    return parseFloat(this.#primaryOperandDisplay.dataset.value)
  }

  /** Sets the primary operand into the dataset and the text content from the HTML element. */
  set primaryOperand(value) {
    this.#primaryOperandDisplay.dataset.value = value ?? ""
    this.#primaryOperandDisplay.textContent = displayNumber(value ?? "")
  }

  /** Gets the secondary operand parsed into a float in order to perform operations. */
  get secondaryOperand() {
    return parseFloat(this.#secondaryOperandDisplay.dataset.value)
  }

  /** Sets the secondary operand into the dataset and the text content from the HTML element. */
  set secondaryOperand(value) {
    this.#secondaryOperandDisplay.dataset.value = value ?? ""
    this.#secondaryOperandDisplay.textContent = displayNumber(value)
  }

  /** Gets the operand selected from the text content of the HTML element. */
  get operation() {
    return this.#operationDisplay.dataset.value
  }

  /** Sets the operand selected into the text content from the HTML element. */
  set operation(value) {
    this.#operationDisplay.dataset.value = value ?? ""
    this.#operationDisplay.textContent = value ?? ""
  }

  /** Clear all the content from the output section of the calculator. */
  clearAll() {
    this.primaryOperand = 0
    this.secondaryOperand = null
    this.operation = null
  }

  addDigit(digit) {
    if (
      digit === "." &&
      this.#primaryOperandDisplay.dataset.value.includes(".")
    )
      return
    if (this.primaryOperand === 0) {
      this.primaryOperand = digit
      return
    }
    this.primaryOperand = this.#primaryOperandDisplay.dataset.value + digit
  }

  removeDigit() {
    const numberString = this.#primaryOperandDisplay.dataset.value
    if (this.primaryOperand <= 1) {
      this.primaryOperand = 0
      return
    }
    this.primaryOperand = numberString.substring(0, numberString.length - 1)
  }

  clear() {
    this.primaryOperand = 0
  }

  chooseOperation(operation) {
    if (this.operation !== "") return
    this.secondaryOperand = this.primaryOperand
    this.operation = operation
    this.primaryOperand = 0
  }

  evaluate() {
    let result
    switch (this.operation) {
      case "+":
        result = this.primaryOperand + this.secondaryOperand
        break
      case "-":
        result = this.primaryOperand - this.secondaryOperand
        break
      case "*":
        result = this.primaryOperand * this.secondaryOperand
        break
      case "/":
        result = this.primaryOperand / this.secondaryOperand
        break
      default:
        return
    }
    this.clearAll()
    this.primaryOperand = result

    return result
  }
}

/** Formats the number past as parameter so it can be display on the output section. */
function displayNumber(number) {
  const stringNumber = number?.toString() || ""
  if (stringNumber === "") return ""
  const [integer, decimal] = stringNumber.split(".")
  const formattedInteger = NUMBER_FORMATTER.format(integer)
  if (decimal == null) return formattedInteger
  return formattedInteger + "." + decimal
}
