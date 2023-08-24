
import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: genre,
  });

export default useGenres;
