import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initualValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("geceModu", false);

  return [darkMode, setDarkMode];
};
