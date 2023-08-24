import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    queryKey: ["platform"],
    // staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
