import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useUserDisplayModeRedirect = async () => {
  const { push, reload, asPath } = useRouter();

  const [displayMode, setDisplayMode] = useState("browser tab");

  useEffect(() => {
    // @ts-ignore
    if (navigator.standalone) {
      setDisplayMode("standalone-ios");
    }
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setDisplayMode("standalone");
    }
    window.addEventListener("appinstalled", () => {
      reload();
    });
  }, [displayMode]);

  useEffect(() => {
    if (
      (displayMode === "standalone" || displayMode === "standalone-ios") &&
      asPath === "/"
    ) {
      push("/dashboard");
    }
  }, [displayMode, asPath]);
  return displayMode;
};
