import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platform from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryFn: apiClient.getAll,
    queryKey: ["platform"],
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
