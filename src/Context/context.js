import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(true)

    return (
        <Context.Provider
            value={{ isModalOpen, setIsModalOpen, isLoginOpen, setIsLoginOpen }}
        >
            {children}
        </Context.Provider>
    )
}

export const UseContext = () => {
    return useContext(Context)
}
