import { useCallback, useState } from "react";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async ({ requestData }) => {
    setIsLoading(true);
    setError(null);

    try {
      const formattedRequestData = {
        method: requestData.method,
        headers: requestData.headers ? {...requestData.headers} : '',
      }

      if (requestData.body) {
        formattedRequestData.body = JSON.stringify(requestData.body);
      }

      const response = await fetch(requestData.url, { ...formattedRequestData })

      if (!response.ok) {
        setError('Invalid request');
      }

      if (formattedRequestData.headers['Accept'] === 'application/text') {
        const data = await response.text();
        setResult(data);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, result, error, sendRequest };
}
