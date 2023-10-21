import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genre from "../data/genre";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";

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
