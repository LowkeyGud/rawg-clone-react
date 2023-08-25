import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genre from "../data/genre";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: ms("24h"), // 24hr
    initialData: genre,
  });

export default useGenres;
