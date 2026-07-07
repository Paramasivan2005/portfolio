import React from 'react'
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const IndorePlants = () => {

  const loading = useLoading();
  
    useEffect(() => {
      loading.current.complete();
    }, []);
  return (
    <div>IndorePlants</div>
  )
}

export default IndorePlants