import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortController = useRef(null);

  useEffect(() => {
    abortController.current = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: abortController.current.signal });
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        setData(data);
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message || 'Something went error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
