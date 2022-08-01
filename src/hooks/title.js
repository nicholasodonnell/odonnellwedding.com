import React, { createContext, useContext, useEffect, useState } from 'react'
export const TitleContext = createContext()

export const TitleProvider = ({ children }) => {
  const [ title, setTitle ] = useState()

  return (
    <TitleContext.Provider value={[ title, setTitle ]}>
      {children}
    </TitleContext.Provider>
  )
}

export const withTitle = () => {
  const [ title ] = useContext(TitleContext)

  return title
}

export const useTitle = title => {
  const [ , setTitle ] = useContext(TitleContext)

  useEffect(() => {
    setTitle(title)
  }, [ setTitle, title ])
}
