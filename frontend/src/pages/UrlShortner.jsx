import React from "react";
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const UrlShortner = () => {
  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, []);
  return (
    <div>UrlShortner</div>
  );
  
};

export default UrlShortner;
