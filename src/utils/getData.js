const API = process.env.API

const getData = async id => {
  const URI = id ? `${API}${id}` : API
  try {
    const response = await fetch(URI)
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    console.log('Fetch Error', error)
  }
}

export default getData
