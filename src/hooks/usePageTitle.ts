import { useEffect } from "react";

export default function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `Hero IO - ${title}`;
  }, [title]);
}
