import { useQuery } from "@tanstack/react-query";
import genre from "../data/genre";
import APIClient from "../services/api-client";
import ms from "ms";

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
