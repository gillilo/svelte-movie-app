exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Gillilo',
      age: 34,
      email: 'ghlwns1535@gmail.com'
    })
  }
}