function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      resolve({ message: 'API response' }); // Resolve with a sample response
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
