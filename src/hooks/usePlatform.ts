import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platform from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryFn: apiClient.getAll,
    queryKey: ["platform"],
    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatform;
