function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received")
    }, 1000)
  })
}

async function getData() {
  try {
    const result = await fetchData()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

getData()