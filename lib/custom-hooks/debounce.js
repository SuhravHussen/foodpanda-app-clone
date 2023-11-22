import { useRef } from "react";
import { useState } from "react";

function useTransition() {
  const [loading, setLoading] = useState(false);
  const timerIdRef = useRef(null); // Create a ref to hold the timer ID

  function startTransition(cb) {
    setLoading(true);

    // Clear any previous timeouts
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }

    // @ts-ignore
    timerIdRef.current = setTimeout(() => {
      cb();
      setLoading(false);
    }, 500);
  }

  return [loading, startTransition];
}

export default useTransition;
