import React,{useReducer}  from "react";

/**
 * Declaring darkmode states
 */
let initialState = {
    flag:true,
    background:"#FFFFFF",
    font:"text-[#000000]",
    headingFont:"black",
    minifont:"text-black",
    buttonColor:"bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"
}

/**
 * Darkmode reducer
 */
const reducer = (state,action) =>{
    switch(action.type){
        case "CHANGE_TO_DARK":
            return {
                background:"#24262b",
                font:"bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent",
                flag:false,
                headingFont:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
                minifont:"text-white",
                buttonColor:""
            }
        case "CHANGE_TO_LIGHT":
            return {
                background:"#FFFFFF",
                font:"text-[#000000]",
                flag:true,
                headingFont:"text-black",
                minifont:"text-black"
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
