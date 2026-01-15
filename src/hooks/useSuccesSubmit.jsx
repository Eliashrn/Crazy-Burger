import { useState } from "react";

export const useSuccesSubmit = (timeDelay = 2000) => {
  const [successSubmit, setSuccessSubmit] = useState(false);

  const succesSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, timeDelay);
  };

  return { successSubmit, succesSubmit };
};
