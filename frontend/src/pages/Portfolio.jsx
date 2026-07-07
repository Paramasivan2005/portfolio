import React from 'react'
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const Portfolio = () => {

  const loading = useLoading();
  
    useEffect(() => {
      loading.current.complete();
    }, []);
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio