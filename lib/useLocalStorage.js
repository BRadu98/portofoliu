import { useState, useEffect } from "react"

export const useLocalStorage = (key, initVal) => {
  const [value, setValue] = useState(() => {
    const persistedVal = localStorage.getItem(key)
    return persistedVal !== null ? persistedVal : initVal
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])
  return [value, setValue]
}