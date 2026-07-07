import React from 'react'
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

const QrCodeGenerator = () => {

  const loading = useLoading();
  
    useEffect(() => {
      loading.current.complete();
    }, []);
  return (
    <div>QrCodeGenerator</div>
  )
}

export default QrCodeGenerator