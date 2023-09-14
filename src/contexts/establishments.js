import React, { createContext, useEffect, useState } from 'react'

import API from '../services/api'

export const EstablishmentsContext = createContext({})

function EstablishmentsProvider({ children }) {
  const [establishments, setEstablishments] = useState([])

  async function getAllEstablishments() {
    const data = await (await API.get('/establishment/findAll')).data
    setEstablishments(data)
  }

  useEffect(() => {
    setTimeout(() => {
      getAllEstablishments()
    }, 5000)
  }, [])
  return (
    <EstablishmentsContext.Provider value={{ establishments }}>
      {children}
    </EstablishmentsContext.Provider>
  )
}

export default EstablishmentsProvider
