import React from "react"

const contextOptions = {
}


const FamilyContext = React.createContext(contextOptions)

export const FamilyProvider = FamilyContext.Provider
export const FamilyConsumer = FamilyContext.Consumer