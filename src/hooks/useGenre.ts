import useData from "./useData";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ({data: genre,error: null, isLoading: false});

export default useGenres;