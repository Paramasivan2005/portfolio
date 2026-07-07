import React from "react";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

const IncomeExpenseTracker = () => {
  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, []);
  return <div>IncomeExpenseTracker</div>;
};

export default IncomeExpenseTracker;
