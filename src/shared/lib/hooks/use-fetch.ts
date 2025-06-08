import { useCallback, useEffect, useState } from "react";

type TUseFetch<T> = {
  isLoading: "idle" | "loading" | "success";
  data: T | null;
  isError: Error | null;
};

export const useFetch = <T>(url: string) => {
  const [fetchData, setFetchData] = useState<TUseFetch<T>>({
    isLoading: "idle",
    data: null,
    isError: null,
  });

  const initialFetch = useCallback(async () => {
    setFetchData({
      data: null,
      isError: null,
      isLoading: "loading",
    });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        
      },

    });
    if (!response.ok) {
      throw new Error("Error");
    }

    try {
      setFetchData({
        data: await response.json(),
        isError: null,
        isLoading: "success",
      });
    } catch (error: unknown) {
      setFetchData({
        data: await response.json(),
        isError: error instanceof Error ? error : new Error("unknown Error"),
        isLoading: "success",
      });
    }
  }, [url]);

  useEffect(() => {
    initialFetch();
  }, [initialFetch]);

  return {
    fetchData: fetchData.data,
    isLoading: fetchData.isLoading,
    isError: fetchData.isError,
    refetch: initialFetch,
  };
};
