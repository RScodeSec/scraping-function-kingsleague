export async function getResource(url) {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error) {
    throw new Error(error);
  }
}






