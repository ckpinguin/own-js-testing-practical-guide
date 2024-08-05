import { describe, it, expect } from "vitest"
import { HttpError, ValidationError } from "./errors"

describe("HttpError", () => {
  it("should create an instance with the correct properties", () => {
    const statusCode = 404
    const message = "Not Found"
    const data = { resource: "User" }

    const error = new HttpError(statusCode, message, data)

    expect(error.statusCode).toBe(statusCode)
    expect(error.message).toBe(message)
    expect(error.data).toEqual(data)
  })
})

describe("ValidationError", () => {
  it("should create an instance with the correct properties", () => {
    const message = "Validation Error"
    const error = new ValidationError(message)

    expect(error.message).toBe(message)
  })
})
