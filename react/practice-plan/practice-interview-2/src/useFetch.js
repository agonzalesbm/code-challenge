import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const abortController = useRef();

  useEffect(() => {
    if (!abortController.current) abortController.current = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();

        setData(data);
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message || 'Something went error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current?.abort();
    }
  }, [url]);
  return { data, loading, error };
};
