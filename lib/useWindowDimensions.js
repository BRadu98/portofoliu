import { useState, useEffect } from 'react';
export function useWindowDimensions() {
  const [dimension, setDimension] = useState([
    0,
    0,
  ]);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      if (window) {
        width = window.innerWidth
        height = window.innerHeight
      }
      setDimension([width, height]);
    }, 100); 
    window?.addEventListener('resize', debouncedResizeHandler);
    return () => window?.removeEventListener('resize', debouncedResizeHandler);
  }, []); //! Note this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}