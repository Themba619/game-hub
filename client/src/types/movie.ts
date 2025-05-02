interface Movie {
    id: number;
    title: string;
    original_title: string;
    original_language: string;
    overview: string;
    genre_ids: number[];
    vote_count: number;
    vote_average: number;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    adult: boolean;
    video: boolean;
}  

export default Movie;