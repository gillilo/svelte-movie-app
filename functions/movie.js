const axios = require('axios')
const { OMDB_API_KEY } = process.env

const handler = async (event, context) => {
  const params = JSON.parse(event.body)
  const { title, type, year, page, id } = params

  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  try {
    const res = await axios.get(url)
    if (res.data.Error) {
      // reject(res.data.Error)
      return {
        statusCode: 400,
        body: res.data.Error
      }
    }
    // resolve(res)
    return {
      statusCode: 200,
      body: JSON.stringify(res.data)
    }
  } catch (error) {
    console.log(error.response.status)
    // reject(error.message)
    return {
      statusCode: error.response.status,
      body: error.message
    }
  }
}

module.exports = { handler }