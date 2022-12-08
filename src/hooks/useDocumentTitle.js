import { useEffect, useState } from "react";

function useTitle(celia) {
  useEffect(() => {
    document.title = celia;
  }, [celia]);
}

export default useTitle;
