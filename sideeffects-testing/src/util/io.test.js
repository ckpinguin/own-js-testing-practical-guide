import { vi, it, expect } from "vitest"
import writeData from "./io"
import { promises as fs } from "fs"

vi.mock("fs") // automock
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      },
    },
  }
})

it("should execute the writeFile method", () => {
  const testData = "test"
  const testFilename = "test.txt"

  writeData(testData, testFilename)

  expect(fs.writeFile).toBeCalled()
})

it("should execute the writeFile method with the right arguments", () => {
  const testData = "test"
  const testFilename = "test.txt"

  writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalledWith(testFilename, testData)
})
