import axios from "axios"

// Types
import Genre from "../types/genre";
import Movie from "../types/movie";

// Configuration
const accessToken = import.meta.env.VITE_READ_ACCESS_TOKEN;

// Define the response shape
interface GenreResponse {
  genres: Genre[];
}

interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = async (): Promise<Movie[]>=> {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };

  try{
    const response = await axios<MovieApiResponse>(url, options);
    return response.data.results;
  }catch(error){
    console.log(`Error fetching movies: ${error}`)
    throw error;
  }
}


export const getGenres = async (): Promise<Genre[]> => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
  
    try {
      const response = await axios<GenreResponse>(url, options);
      return response.data.genres; // Return the genres array directly
    } catch (err) {
      console.error(err);
      return [];
    }
};