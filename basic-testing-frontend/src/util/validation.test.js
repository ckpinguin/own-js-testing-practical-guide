import { it, expect } from "vitest"

import { validateNumber, validateStringNotEmpty } from "./validation"

// validateStringNotEmpty
it("should throw an error with a message that contains ar reason (must not be empty)", () => {
  const input = ""
  const validationFn = () => validateStringNotEmpty(input)
  expect(validationFn).toThrow(/must not be empty/)
})

it("should throw an error if a long string of blanks is provided", () => {
  const input = ""
  const validationFn = () => validateStringNotEmpty(input)
  expect(validationFn).toThrow()
})

// validateNumber
it("should throw an error if a non-numeric value is provided", () => {
  const input = "one!"
  const validationFn = () => validateNumber(input)
  expect(validationFn).toThrow()
})

it("should throw an error if NaN is provided", () => {
  const input = NaN
  const validationFn = () => validateNumber(input)
  expect(validationFn).toThrow(/invalid number input./i)
})

it("should not throw an error when provided with a number", () => {
  const input = 4
  const validationFn = () => validateNumber(input)
  expect(validationFn).not.toThrow()
})
