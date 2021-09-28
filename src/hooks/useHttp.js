import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useHttp = ({ url = "", method = "get", body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios[method](
        url,
        JSON.parse(headers),
        JSON.parse(body)
      );
      if (response.data.status === 400) {
        setError((prevState) => (prevState = response.data));
      } else {
        setResponse(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [body, headers, method, url]);

  useEffect(() => {
    if(!url.length === 0){
        fetchData();
    }

    
  }, [method, url, body, headers, fetchData]);

  return {response, error, loading };
};

export default useHttp;
