import React,{useReducer}  from "react";

/**
 * Declaring darkmode states
 */
let initialState = {
    flag:true,
    background:"bg-white",
    font:"text-black"
}

/**
 * Darkmode reducer
 */
const reducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_TO_DARK":
            return {
                background:"bg-[#151515]",
                font:"text-white",
                flag:false
            }
        case "CHANGE_TO_LIGHT":
            return {
                background:"bg-white",
                font:"text-black",
                flag:true
            }
        default:
            return state
    }
}

export const useThemeContext= React.createContext();

function UsethemecontextProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <useThemeContext.Provider value={{state:state,ChangeTheme:dispatch}}>
        {children}
    </useThemeContext.Provider>
  )
}

export default UsethemecontextProvider
