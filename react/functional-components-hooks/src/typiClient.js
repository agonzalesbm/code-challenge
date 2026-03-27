export const typiClient = async (endPoint, options = {}) => {
  const defaultOptions = {
    method: 'GET',
    ...options
  };
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const response = await fetch(`${BASE_URL}/${endPoint}`, defaultOptions);

  if (!response.ok) {
    throw new Error(`Status response: ${response.status}`);
  }

  return response.json();
};
