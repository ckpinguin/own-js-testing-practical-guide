import writeData from "./util/io.js"

export function generateReportData(logFn) {
  const data = "Some dummy data for this demo app"
  if (logFn) {
    logFn(data) // side-effect
  }

  return data
}

export async function storeData(data) {
  if (!data) {
    throw new Error("No data received!")
  }
  await writeData(data, "data.txt")
}
