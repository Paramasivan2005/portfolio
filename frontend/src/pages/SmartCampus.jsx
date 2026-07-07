import React from 'react'
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const SmartCampus = () => {

  const loading = useLoading();
  
    useEffect(() => {
      loading.current.complete();
    }, []);
  return (
    <div>SmartCampus</div>
  )
}

export default SmartCampus