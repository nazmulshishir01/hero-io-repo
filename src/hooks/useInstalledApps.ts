import { useEffect, useState } from "react";
import type { AppItem } from "../types";
import {
  getInstalled,
  install as add,
  uninstall as remove,
} from "../utils/storage";

export default function useInstalledApps() {
  const [installed, setInstalled] = useState<AppItem[]>([]);

  useEffect(() => {
    setInstalled(getInstalled());
  }, []);

  const install = (app: AppItem) => {
    add(app);
    setInstalled(getInstalled());
  };
  const uninstall = (id: number) => {
    remove(id);
    setInstalled(getInstalled());
  };
  return { installed, install, uninstall };
}
