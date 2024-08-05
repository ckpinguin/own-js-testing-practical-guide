import { vi, it, expect } from "vitest"
import writeData from "./io"
import { promises as fs } from "fs"

vi.mock("fs") // automock

it("should execute the writeFile method", () => {
  const testData = "test"
  const testFilename = "test.txt"

  writeData(testData, testFilename)

  expect(fs.writeFile).toBeCalled()
})
