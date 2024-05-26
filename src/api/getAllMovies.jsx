export const getAllMovies = async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
