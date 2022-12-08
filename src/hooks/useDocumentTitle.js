import { useEffect } from "react";

function useDocumentTitle(celia) {
  useEffect(() => {
    document.title = celia;
  }, [celia]);
}

export default useDocumentTitle;
