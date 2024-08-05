import { it, expect } from "vitest"
import { validateNotEmpty } from "./validation"

it("should throw an error when an empty string is provided", () => {
  const inputStr = ""
  const resultFn = () => {
    validateNotEmpty(inputStr)
  }
  expect(resultFn).toThrow()
})

it("should not throw when a non-empty string is provided", () => {
  const inputStr = "Test"
  const resultFn = () => {
    validateNotEmpty(inputStr)
  }
  expect(resultFn).not.toThrow()
})
