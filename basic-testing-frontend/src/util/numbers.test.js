import { it, expect } from "vitest"
import { transformToNumber } from "./numbers"

it("should make a number out of a string number", () => {
  const arg = "1"

  const result = transformToNumber(arg)

  expect(result).toBeTypeOf("number")
  // Test this too, because NaN as also of type number
  expect(result).toBe(1)
  // more generic:
  expect(result).toBe(+arg)
})

it("should yield NaN for a non-transformable value", () => {
  const input = "one!"
  const input2 = {}

  const result = transformToNumber(input)
  const result2 = transformToNumber(input2)

  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})
