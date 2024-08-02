import { it, expect } from "vitest"
import { transformToNumber } from "./numbers"

it("should make a number out of a string number", () => {
  const arg = "1"

  const result = transformToNumber(arg)

  expect(result).toBeTypeOf("number")
})

it("should yield NaN for a non-transformable value", () => {
  const arg = "one!"

  const result = transformToNumber(arg)

  expect(result).toBeNaN()
})
