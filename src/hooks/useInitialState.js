import { useState, useEffect } from "react";

const useInitialState = (apiUrl) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState  