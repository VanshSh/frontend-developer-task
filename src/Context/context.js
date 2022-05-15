import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(true)

    const modalCloseHandler = (e) => {
        e.preventDefault()
        setIsModalOpen(!isModalOpen)
    }

    return (
        <Context.Provider
            value={{
                isModalOpen,
                isLoginOpen,
                setIsModalOpen,
                setIsLoginOpen,
                modalCloseHandler,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const UseContext = () => {
    return useContext(Context)
}
