import { useState } from "react";

export const useSuccesSubmit = () => {
  const [successSubmit, setSuccessSubmit] = useState(false);

  const succesSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  return { successSubmit, succesSubmit };
};
