import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleModeChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleModeChange);
    console.log(mediaQuery.matches)
    setDarkMode(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleModeChange);
    };
  }, []);

  const switchDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return [darkMode, switchDarkMode];
};

export default useDarkMode;
