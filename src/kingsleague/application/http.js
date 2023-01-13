export async function getResource(url) {
  try {
    console.log("[GET]" + url);
    const response = await fetch(url);
    return await response.text();
  } catch (error) {
    throw new Error(error);
  }
}






