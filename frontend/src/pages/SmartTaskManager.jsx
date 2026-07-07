import React from 'react'
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const SmartTaskManager = () => {

  const loading = useLoading();
  
    useEffect(() => {
      loading.current.complete();
    }, []);
  return (
    <div>SmartTaskManager</div>
  )
}

export default SmartTaskManager