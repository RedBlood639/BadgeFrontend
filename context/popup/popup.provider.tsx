import React, { useReducer } from 'react'
import { PopupContext } from './popoup.context'

const INITIAL_STATE = {
  popup: ``,
  params: null,
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case `menuSidebar`:
      return {
        ...state,
        popup: `menuSidebar`,
      }
    default:
      return INITIAL_STATE
  }
}

export const PopupProvider: React.FunctionComponent = ({ children }) => {
  const [popupState, popupDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <PopupContext.Provider value={{ popupState, popupDispatch }}>
      {children}
    </PopupContext.Provider>
  )
}
