export const getSingleMovie = async (id) => {
  try {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};
