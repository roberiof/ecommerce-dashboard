import {
  useQuery,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query";

import { axiosInstance } from "@/store/services/axios";
import { cookieGet } from "@/store/services/cookies";

export const genericQueryFn = async <T>(
  token: string,
  endpoint: string
): Promise<T> => {
  const axiosClient = axiosInstance(token);
  const response = await axiosClient.get(endpoint);
  return response.data;
};

const useGenericFetch = <T>(
  endpoint: string,
  options?: Omit<UseQueryOptions<T, unknown, T>, "queryKey" | "queryFn">
): UseQueryResult<T, unknown> => {
  const token = cookieGet("accessToken");

  return useQuery<T, unknown>({
    queryKey: [endpoint],
    queryFn: () => genericQueryFn<T>("token", endpoint),
    staleTime: 2 * 1000, // 2 seconds
    gcTime: 60 * 1000 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!token,
    ...options
  });
};

export default useGenericFetch;
