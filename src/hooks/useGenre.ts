import useData, { FetchResponse } from "./useData";
import genre from "../data/genre";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () =>
  useQuery({
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
