import { createContext, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const ref = useRef(null);

  return (
    <LoadingContext.Provider value={ref}>
      <LoadingBar
        color="#ec4899"
        ref={ref}
        shadow={false}
        height={4}
      />

      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);